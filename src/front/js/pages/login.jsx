import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/buttonCV.css"

const Login = () => {
    return (
        <div className="d-flex justify-content-center mx-auto my-auto">

            <div className="form-container mt-5">
                <div className="form">
                    <span className="heading text-center">Let's get into it 😎</span>
                    <input placeholder="Email" type="email" className="input" />
                    <input placeholder="Password" id="mail" type="password" className="input" />

                    <div className="button-container">
                        <div className="login-button-container">
                            <div id="login-btn" className="login-button w-100">Let's go</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Login;