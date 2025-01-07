import React from "react";
import "./../../../styles/aboutme.css";
import { Link } from "react-scroll";

const About = () => {
    return (
        <div className="container">
            <div className="content">
                <p>Hi I am</p>
                <h2>Guillermo Obando</h2>
                <h1>Full Stack Developer</h1>
                <p>I'm just a 24 years old guy who loves to code and Jesus, bases in Alajuela Costa Rica, I also like playing football and silence</p>
                <button className="see-more">
                    <Link to="contact-me" className="text-decoration-none text-white">
                        Get in Touch!
                    </Link>
                </button>
                <div className="social-icons">
                    <a href="https://github.com/Sharguidev"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/guillermo-obando-0978b41aa/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="profile-img">
                <img src="https://github.com/Sharguidev/personal-portafolio/blob/main/src/front/img/foto_portadev.png?raw=true" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
        </div>

    );
};

export default About;