import React from "react";
import { Link } from "react-router-dom";
// import "./../../styles/aboutMe.css";
import { Btn_3DContactaKnow } from "./downloadCV";

export const AboutMe = () => {
    return (
        <div className="container-about">
            <div className="row">
                <div className="col-12">
                    <img className="rounded-circle mt-5" src="https://github.com/Sharguidev/personal-portafolio/blob/main/src/front/img/fotoCV.jpeg?raw=true" style={{ width: "200px", height: "200px" }}></img>
                    <h1 className="text-center"> 👋🏾 Hello Internaut!</h1>
                    <p className="text-center mt-4"> Hi, my name is <Link to="/" className="link-aboutme"> Guillermo Obando,</Link> I'm a FullStack developer from Costa Rica.

                    </p>
                    <p className="text-center">
                        Recently, graduated from the <Link to="https://www.4geeksacademy.com" className="link-aboutme">4Geeks Academy</Link> FullStack Bootcamp.
                    </p>
                    <p className="text-center">
                        Here you can see more about my <Link to="/skills" className="link-aboutme">Skills</Link> and <Link to="/projects" className="link-aboutme">Projects</Link>
                    </p>
                    <div className="">
                        <Btn_3DContactaKnow />

                    </div>
                </div>
            </div>
        </div>
    );
};