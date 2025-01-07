import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom"
import { DownloadCV } from "./downloadCV.jsx";
import LogOut from "./logOut.jsx";
import "./../../styles/navbar.css";

export const Navbar = () => {
	const { store } = useContext(Context);

	// return <Navbarnac />
	if (store.token) {
		return <NavbarLoggedIn />
	} else {
		return <NavbarLoggedOut />
	}

};

const Navbarnac = () => {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Pricing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" aria-disabled="true">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}


const NavbarLoggedOut = () => {
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
					<div className="navbar-nav ms-auto gap-2 navd-link mt-4">
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
}


const NavbarLoggedIn = () => {
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
						<LogOut />
					</div>
				</div>
			</div>
		</nav>
	);
}
