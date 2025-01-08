import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/footer.css";

export function Footer() {
	return (


		<div className="container-footer mt-auto">
			<footer className="pie-pagina ">
				<div className="grupo-1">
					<div className="box">
						<figure className="imagen">
							<a href="#">
								<img alt="imagen" src="https://github.com/Sharguidev/personal-portafolio/blob/main/src/front/img/Sharguidev_s.png?raw=true" />
							</a>
						</figure>
					</div>
					<div className="box mt-5">
						<h2 className="text-center">About Me</h2>
						<span>
							I'm a Catholic guy, passionated for Technology music and the most important the Mass, I'm a Developer that can be a Project Manager or UX/UI</span>
					</div>
					<div className="box mt-5 text-center">
						<h2 >Follow Me</h2>
						<div className="red-social">
							<a href="https://github.com/Sharguidev" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/guillermo-obando-0978b41aa/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-linkedin"></i>
							</a>

						</div>
					</div>
				</div>

				<div className="grupo-2">
					<small>&copy; 2024 <b>Sharguidev</b> - Todos los derechos reservados.</small>
				</div>
			</footer>
		</div>


	);
}
