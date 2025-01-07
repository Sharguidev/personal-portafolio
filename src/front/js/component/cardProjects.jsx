import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../styles/cardsProject.css";
import { Btn_page_project } from "./downloadCV.jsx";
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


        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text mb-5">{project.description}</p>
                <a href="#" className="btn-know-more mt-3">See More</a>
            </div>
        </div>




    );


};
