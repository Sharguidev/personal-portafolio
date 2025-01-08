import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/buttonCV.css"
import "./../../styles/skills.css"



export const Skills = () => {
    return (
        <div className="skills-container">
            <div id="skills" >

                <h1 className="mt-5 text-white" style={{ fontSize: "40px", fontWeight: "700" }}> Skills</h1>
                <p className="text-skills" style={{ fontSize: "24px", fontWeight: "500", color: "#1a659e" }}>Here you can see my skills</p>


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
                <h1 className="mt-5 text-white" style={{ fontSize: "40px", fontWeight: "700" }}> UI/UX</h1>
                <div className="skills-grid">
                    {[
                        { icon: "fa-figma", name: "Figma" },
                        { icon: "fa-a", name: "Adobe Express" },
                        { icon: "fa-c", name: "Canva" },
                        { icon: "fa-l", name: "Lunacy" },

                    ].map(skill => (
                        <a className="codepen-button " key={skill.name}>
                            <span><i className={`fa-brands ${skill.icon}`}></i></span><br />
                            <span>{skill.name}</span>
                        </a>
                    ))}
                </div>

                <h1 className="mt-5 text-white" style={{ fontSize: "40px", fontWeight: "700" }}>Code Editors</h1>
                <div className="skills-grid">
                    {[
                        { icon: "fa-s", name: "Sublime Text" },
                        { icon: "fa-a", name: "Visual Studio Code" },
                        { icon: "fa-w", name: "Windsurf" },


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

