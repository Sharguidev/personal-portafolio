import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "./../../styles/contactForm.css";
import toast from "react-hot-toast";


export const ContactForm = () => {

    const { actions } = useContext(Context);
    const [errors, setErrors] = useState({});
    const [gmessage, setGmessage] = useState("");


    const validateErrors = () => {
        let errors = {};
        if (!gmessage.name) {
            errors.name = "Name is required";
        }
        if (!gmessage.email) {
            errors.email = "Email is required";
        }
        if (!gmessage.message) {
            errors.message = "Message is required";
        } else if (!/\S+@\S+\.\S+/.test(gmessage.email)) {
            errors.email = "Email is not valid";
        }
        return errors;
    };

    function resetForm() {
        let nombre = document.getElementById("name");
        let email = document.getElementById("mail");
        let message = document.getElementById("message");
        nombre.value = "";
        email.value = "";
        message.value = "";

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validation = validateErrors();
        if (Object.keys(validation).length === 0) {
            await actions.getInTouch(gmessage.name, gmessage.email, gmessage.message);
            resetForm();
            toast.success("Message sent successfully! 🎉")
        } else {
            setErrors(validation);
            toast.error("Error sending message! 🙅🏾‍♂️")

        }

    }

    return (


        <div className="mt-5 mb-5" id="contact-me">
            <h1 className="mt-5">Contact Me</h1>
            <div className="form-container mt-5">
                <div className="form">
                    <span className="heading">Get in touch</span>
                    <input
                        placeholder="Name"
                        type="text"
                        className="input"
                        id="name"
                        onChange={(e) => { setGmessage({ ...gmessage, name: e.target.value }) }}
                    />
                    <input
                        placeholder="Email"
                        id="mail"
                        type="email"
                        className="input"
                        onChange={(e) => { setGmessage({ ...gmessage, email: e.target.value }) }}
                    />
                    <textarea
                        placeholder="Say Hello"
                        rows="10"
                        cols="30"
                        id="message"
                        name="message"
                        className="textarea"
                        onChange={(e) => { setGmessage({ ...gmessage, message: e.target.value }) }}
                    />
                    <div className="button-container">
                        <button className="send-button" onClick={handleSubmit}>Send</button>
                        <div className="reset-button-container">
                            <div id="reset-btn" className="reset-button" onClick={resetForm}>Reset</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}