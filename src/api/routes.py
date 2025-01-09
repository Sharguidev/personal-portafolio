"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, GetInTouch
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'] )
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email is None or password is None:
        return jsonify({"error": "email and password are required"}), 400

    user = User.query.filter_by(email=email).first()

    if user is None:
        raise APIException("User not found", status_code=404)
    
    if user.password != password:
        raise APIException("Wrong password", status_code=401)
    

    if user.password == password and user.email == email:
        access_token = create_access_token(identity=email)
        
        return jsonify({
                "token": access_token,
                "user": user.serialize() 
            }), 200
    else:
        return jsonify({"error": "email or password are incorrect"}), 400



@api.route('/getintouch', methods=['POST'])
def getintouch():
    try:
       body = request.get_json()

       if body is None:
           return jsonify({"error": "Body is required"}), 400
       
       required_fields = ["name", "email", "message"]
       for field in required_fields:
           if field not in body:
               return jsonify({"error": f"{field} is required"}), 400

       new_getintouch = GetInTouch(
           name=body["name"],
           email=body["email"],
           message=body["message"]
       )

       db.session.add(new_getintouch)
       db.session.commit()

       employer = GetInTouch.query.filter_by(email=body["email"]).first()

       if employer is None:
           return jsonify({"error": "Email not found"}), 404

       #Config send email

       sender_email = "gestiones.sharguidev@gmail.com"
       sender_password = "mquybgsvcngqsrvw"
       receiver_email = "guillermoj.obando@gmail.com"

       subject = f"Nuevo Mensaje de {body['name']}"
       message_content = f"""
       Hola {employer.name}
       

       Correo del empleador: {body['email']}
       {body['message']}
       """

       msg = MIMEMultipart()
       msg["From"] = sender_email
       msg["To"] = receiver_email
       msg["Subject"] = subject
       msg.attach(MIMEText(message_content, "plain"))

       try:

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        server.quit()


       except Exception as e:
        return jsonify({"error": str(e)}), 500
       
       return jsonify({"message": "Message sent successfully"}), 200


    except Exception as e:
       return jsonify({"error": str(e)}), 500