import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../styles/cardsProject.css";
import { Btn_page_project } from "./downloadCV";
import { Context } from "../store/appContext";


export default function CardProjects() {

    const { store } = useContext(Context);

    return (

        <div className="container">
            <div className="row justify-content-center">
                {store.projects.map((project, index) => {
                    return (
                        <div key={index} className="col-12 col-md-3 mb-4 d-flex justify-content-center">
                            <ProjectsItems project={project} />
                        </div>

                    );
                })}

            </div>



        </div>

    );

};


const ProjectsItems = ({ project }) => {
    return (

        <div className="card" >
            <div className="card-image"></div>
            <p className="card-title">{project.title}</p>
            <p className="card-body">
                {project.description}
            </p>
            <Btn_page_project />
        </div>




    );


};
