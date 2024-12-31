import React from "react";
import { Link } from "react-router-dom";
// import "./../../styles/projects.css";


const Projects = () => {
    return (
        <div className="text-center mt-5">
            <div className="justify-content-center" style={{ marginTop: "150px" }}>
                <p>My Projects</p>
                <h1>My Web developed projects</h1> <br />
                <p>You can see my projects here, click in Know More! to get more information about each project</p>
            </div>
            <div className="d-flex justify-content-center card-projects" >

            </div>
            <div>
                <Link to="/" className="see-more">Go Back</Link>
            </div>
        </div>
    );
};


export default Projects;