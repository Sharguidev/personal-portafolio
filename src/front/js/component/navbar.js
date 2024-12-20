import React from "react";
import { Link } from "react-router-dom";
import { DownloadCV } from "./downloadCV";
import "./../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<Link to="/" className="navbar-brand navd-link" >
					<span>
						<img src="https://github.com/Sharguidev/personal-portafolio/blob/main/src/front/img/Sharguidev_p.png?raw=true" style={{ width: "150px" }}></img>
					</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto gap-2 navd-link">
						<Link to="/" className="nav-link active navd-link" aria-current="page">About Me</Link>
						<Link to="/" className="nav-link navd-link" >Projects</Link>

						<Link to="/" className="nav-link navd-link" >Skills</Link>
						<Link to="/" className="nav-link navd-link" >Contact Me</Link>
						<DownloadCV />
					</div>
				</div>
			</div>
		</nav>
	);
};
