import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardProjects from "../component/cardProjects.jsx";
import { Skills } from "../component/skills.jsx";
import { ContactForm } from "../component/contactForm.jsx";


import { AboutMe } from "../component/aboutMe";
import About from "../component/about/about.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<About />

			<div className="justify-content-center projects" style={{ marginTop: "150px" }} id="projects">
				<p>My Projects</p>
				<h1>My Web developed projects</h1> <br />
				<p>You can see my projects here, click in Know More! to get more information about each project</p>
			</div>
			<div className="container-fluid justify-content-center card-projects" >
				<CardProjects />
			</div>
			<div className="mt-5">
				<Link to="/projects" className="see-more ">See More</Link>
			</div>
			<div style={{ marginTop: "150px" }}>
				<Skills />
			</div>

			<div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
				<ContactForm />
			</div>
		</div>
	);
};
