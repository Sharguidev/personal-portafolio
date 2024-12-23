import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/cardsProject.css";
import { Btn_page_project } from "./downloadCV";

const CardProjects = () => {
    return (

        <div>

            <div id="projects" className="card mx-5 my-2" style={{ marginTop: "100px" }}>
                <div className="card-image"></div>
                <p className="card-title">Card title</p>
                <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
                </p>
                <Btn_page_project />
            </div>


        </div>


    );

}

export default CardProjects;