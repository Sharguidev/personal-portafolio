import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import BtnUploadFiles from "../component/uploadFiles.jsx";
import { useNavigate } from "react-router-dom";

export const UploadProject = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (!store.token) {
            navigate("/")
        }
    }, [store.token]);


    return (
        <div className="d-flex justify-content-center ">

            <div className="form-container mt-5">
                <div className="form">
                    <span className="heading text-center">Let's get into it 😎</span>
                    <input placeholder="Name of the Project" type="text" className="input" />
                    <input placeholder="Technologies Used" type="text" className="input" />
                    <textarea placeholder="Project Overview" onChange={autoResize} type="text" className="input" />
                    <textarea placeholder="Key Functions" onChange={autoResize} type="text" className="input" />
                    <input placeholder="Github Repo" type="text" className="input" />
                    <input placeholder="Live Link" type="text" className="input" />
                    <textarea placeholder="Description" id="description" onChange={autoResize} type="text" className="input" />
                    <div className="button-container">
                        <div className="login-button-container">
                            <div id="login-btn" className="login-button w-100">Let's go</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    function autoResize() {
        const textarea = document.getElementsByTagName("textarea");
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }

}

