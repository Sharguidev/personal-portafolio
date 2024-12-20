import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardProjects from "../component/cardProjects.js";

import { AboutMe } from "../component/aboutMe";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<AboutMe />
			<hr style={{ height: "2px", backgroundColor: "white", marginTop: "50px" }} />
			<div className="d-flex justify-content-center card-projects">
				<CardProjects />
				<CardProjects />
				<CardProjects />

			</div>
		</div>
	);
};
