import React from "react";
import { Link } from "react-router-dom";
import CorrouselProject from "../component/corrouselProject.jsx";


const SingleProject = () => {
    return (
        <div>
            <h1 className=" text-center my-5">Project Information</h1>
            <CorrouselProject />
            <div className="container gap-4 text-center mt-5">
                <div className="row">
                    <h3>What was the problem?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam iusto possimus pariatur quasi tempore explicabo debitis reiciendis aspernatur cum ducimus? Necessitatibus perferendis cum blanditiis laborum quaerat eos voluptates tempora similique.</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <strong><h3 className="my-5 ms-4">Project Overview</h3></strong>
                        <p style={{ textAlign: "justify", fontSize: "20px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dignissimos laboriosam, esse commodi quisquam <br /> totam ad obcaecati perspiciatis iusto aut? Ea autem pariatur error, inventore quam corrupti minima sapiente modi.</p>
                    </div>
                    <div className="col-6">
                        <h3 className="my-5">Technologies Used</h3>
                        <p>Python, JavaScript, HTML, CSS</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <h3>Key Functions</h3>
                        <ul>
                            <li>Filter by price</li>
                            <li>Filter by beds, bathrooms </li>
                            <li>Show Properties in the landing page</li>
                        </ul>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;



{/* <div className="host-property-rules">
        <h2>Reglas de convivencia</h2>
        <ul>
          {property.rules && property.rules.split(',').map((rule, index) => (
            <li key={index}>{rule.trim()}</li>
          ))}
        </ul>
    </div> 
    
     <div className="skills-grid">
                    <a class="codepen-button"><span>HTML</span></a>
                    </div>
    
    */}