import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/buttonCV.css"
import "./../../styles/skills.css"



export const Skills = () => {
    return (
        <div className="skills-container">
            <div id="skills" >

                <h1 className="mt-5">Skills</h1>
                <p className="text-skills" style={{ fontSize: "24px" }}>Here you can see my skills</p>


                <div className="skills-grid">
                    {[
                        { icon: "fa-html5", name: "HTML" },
                        { icon: "fa-css3", name: "CSS" },
                        { icon: "fa-js", name: "JavaScript" },
                        { icon: "fa-react", name: "React" },
                        { icon: "fa-php", name: "(Backend DB) PHP" },
                        { icon: "fa-python", name: "Python" },
                        { icon: "fa-solid fa-pepper-hot", name: "Flask" },
                        { icon: "fa-solid fa-database", name: "PostgreSQL" },
                        { icon: "fa-docker", name: "Docker" },
                        { icon: "fa-git-alt", name: "Git" },
                        { icon: "fa-github", name: "Github" },
                        { icon: "fa-linux", name: "Linux" },

                    ].map(skill => (
                        <a className="codepen-button " key={skill.name}>
                            <span><i className={`fa-brands ${skill.icon}`}></i></span><br />
                            <span>{skill.name}</span>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

