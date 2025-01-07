import React from "react";

const About = () => {
    return (
        <div className="container-about">
            <div className="mb-3 d-flex justify-content-center mx-auto" style={{ maxWidth: "540px", height: "300px" }}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;