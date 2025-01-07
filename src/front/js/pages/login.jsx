import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "./../../styles/buttonCV.css"
import "./../../styles/login.css"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { store, actions } = useContext(Context);
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        let response = await actions.login(user.email, user.password);
        if (response) {
            toast.success("Login Success 🎉")
            navigate("/uploadProject")
        } else {
            toast.error("Email or password are incorrect 🙅🏾‍♂️")
        }
    }

    useEffect(() => {
        if (store.token) {
            navigate("/uploadProject")
        }
    }, [store.token])


    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="container-login mx-auto mb-5 mt-5">
            <h1 className="text-center my-4">Let's Rock</h1>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control input-login"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <label htmlFor="floatingInput" className="">
                    Email address
                </label>
            </div>
            <div className="form-floating">
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control input-login"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <label htmlFor="floatingPassword">Password</label>
                <div id="toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <i className="fa-solid fa-eye-slash"></i>
                    ) : (
                        <i className="fa-solid fa-eye"></i>
                    )}
                </div>
            </div>
            <div className="d-flex justify-content-center my-4">
                <button
                    onClick={handleLogin}
                    className="btn-login" >Let's go</button>
            </div>
        </div>
    );
};


export default Login;