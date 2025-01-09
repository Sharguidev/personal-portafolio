import React, { useContext } from "react";

import { Context } from "../store/appContext";

// import "./../../styles/projects.css";


const Projects = () => {

    const { store } = useContext(Context);

    return (
        <div className="mx-auto">

            <table className="table table-dark text-center">
                <thead>
                    <tr >
                        <th scope="col">Year</th>
                        <th scope="col">Project</th>
                        <th scope="col">Built With</th>
                        <th scope="col">Github Link</th>
                        <th scope="col">Live Link</th>
                    </tr>

                </thead>
                <tbody>
                    {store.projects.map((project, index) => {
                        return (
                            <ProjectInfo key={index} project={project} />
                        );
                    })}


                </tbody>
            </table >
        </div>
    );
};

const ProjectInfo = ({ project }) => {
    return (
        <tr>
            <th scope="row">{project.year}</th>
            <td>{project.title}</td>
            <td>{project.builtWith}</td>
            <td><a href={project.githubLink} target="_blank" className="text-decoration-none text-white">{project.title}</a></td>
            <td><a href="#" target="_blank" className="text-decoration-none text-white">Coming soon</a> </td>
        </tr>
    );
};


export default Projects;