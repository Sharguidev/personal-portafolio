import React from "react";
import "./../../styles/contactForm.css";


export const ContactForm = () => {

    return (


        <div className="mt-5 mb-5" id="contact-me">
            <h1 className="mt-5">Contact Me</h1>
            <div class="form-container mt-5">
                <div class="form">
                    <span class="heading">Get in touch</span>
                    <input placeholder="Name" type="text" class="input" />
                    <input placeholder="Email" id="mail" type="email" class="input" />
                    <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
                    <div class="button-container">
                        <div class="send-button">Send</div>
                        <div class="reset-button-container">
                            <div id="reset-btn" class="reset-button">Reset</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}