import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/cardsProject.css";
import { Btn_page_project } from "./downloadCV";

const CardProjects = () => {
    return (
        <div id="projects" class="card mx-5 my-5" style={{ marginTop: "100px" }}>
            <div class="card-image"></div>
            <p class="card-title">Card title</p>
            <p class="card-body">
                Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
            </p>
            <Btn_page_project />
        </div>
    );

}

export default CardProjects;