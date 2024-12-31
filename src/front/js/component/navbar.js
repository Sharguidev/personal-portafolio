import React from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom"
import { DownloadCV } from "./downloadCV.jsx";
import "./../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<LinkRouter to="/" className="navbar-brand navd-link" >
					Sharguidev
				</LinkRouter>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#sectionsLanding"
					aria-controls="sectionsLanding"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse ms-auto" id="sectionsLanding">
					<div className="navbar-nav ms-auto gap-2 navd-link">
						<Link to="about-me" className="nav-link active navd-link" aria-current="page">About Me</Link>
						<Link to="projects" className="nav-link navd-link" >Projects</Link>

						<Link to="skills" className="nav-link navd-link" >Skills</Link>
						<Link to="contact-me" className="nav-link navd-link" >Contact Me</Link>
						<DownloadCV />
					</div>
				</div>
			</div>
		</nav>
	);
};
