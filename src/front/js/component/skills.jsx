import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/buttonCV.css"
import "./../../styles/skills.css"



export const Skills = () => {
    return (
        <div className="skills-container">
            <div id="skills" >

                <h1 className="mt-5">Skills</h1>
                <p className="text-skills">Here you can see my skills</p>


                <div className="skills-grid">
                    <a class="codepen-button"><span>HTML</span></a>
                    <a className="codepen-button"><span>JavaScript</span></a>
                    <a className="codepen-button"><span>CSS</span></a>
                    <a className="codepen-button"><span>React</span></a>
                    <a className="codepen-button"><span>Flask API</span></a>
                    <br />
                    <a className="codepen-button"><span>Python</span></a>
                    <a className="codepen-button"><span>Postgress SQL</span></a>
                    <a className="codepen-button"><span>Bootstrap</span></a>
                    <a className="codepen-button"><span>Git</span></a>
                    <a className="codepen-button"><span>Github</span></a>
                    <a className="codepen-button"><span>PHP (Backend DB)</span></a>
                </div>

            </div>
        </div>
    );
};