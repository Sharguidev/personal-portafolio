import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-2 text-center ">
		<div className="row">
			<div className="col-4">
				<img src="https://github.com/Sharguidev/personal-portafolio/blob/main/src/front/img/Sharguidev_s.png?raw=true" alt="" style={{ width: "200px" }} />
			</div>
			<div className="col-4 mt-5">
				<h1>About Me</h1>
				<p>I'm a Catholic guy passioned for Christ and Technology thats why I'm into programming</p>
			</div>
			<div className="col-4 mt-5">
				<h1>Follow Me</h1>
				<div className="social-media">
					<a href="https://github.com/Sharguidev">
						<i className="fab fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/guillermo-obando-0978b41aa/">
						<i className="fab fa-linkedin"></i>
					</a>
				</div>
			</div>
		</div>
	</footer>
);
