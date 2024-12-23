import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardProjects from "../component/cardProjects.js";
import { Skills } from "../component/skills.jsx";
import { ContactForm } from "../component/contactForm.jsx";


import { AboutMe } from "../component/aboutMe";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<AboutMe />
			{/* <hr style={{ height: "2px", backgroundColor: "white", marginTop: "50px" }} /> */}
			<div className="justify-content-center" style={{ marginTop: "150px" }}>
				<p>My Projects</p>
				<h1>My Web developed projects</h1> <br />
				<p>You can see my projects here, click in Know More! to get more information about each project</p>
			</div>
			<div className="d-flex justify-content-center card-projects" >
				<CardProjects />
				<CardProjects />
				<CardProjects />


			</div>
			<div>
				<button className="see-more"><Link to="/projects" className="link-seemore">See More</Link></button>
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
