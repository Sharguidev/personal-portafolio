import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../styles/cardsProject.css";
import { Btn_page_project } from "./downloadCV";
import { Context } from "../store/appContext";


export default function CardProjects() {

    const { store } = useContext(Context);

    return (

        <div className="container">
            <div className="d-flex flex-wrap justify-content-center w-full">
                {store.projects.map((project, index) => {
                    return <ProjectsItems key={index} project={project} />
                })}

            </div>

            {ProjectsItems}

        </div>

    );

};


const ProjectsItems = ({ project }) => {
    return (

        <div>

            <div className="card mx-5 my-2" style={{ marginTop: "100px" }}>
                <div className="card-image"></div>
                <p className="card-title">{project.title}</p>
                <p className="card-body">
                    {project.description}
                </p>
                <Btn_page_project />
            </div>


        </div>
    );


};
