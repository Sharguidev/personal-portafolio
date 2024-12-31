import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "./../../styles/buttonCV.css"
import "./../../styles/login.css"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="container-login mx-auto my-auto">
            <h1 className="text-center my-4">Let's Rock</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control input-login" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput" className="">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control input-login" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword" >Password</label>
            </div>
            <div className="d-flex justify-content-center my-4">
                <button className="btn-login">Let's go</button>

            </div>
        </div>
    );
};


export default Login;