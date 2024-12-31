import React from "react";
import "./../../styles/buttonCV.css";


export const DownloadCV = () => {
    return (
        /* From Uiverse.io by andrew-demchenk0 */
        /* From Uiverse.io by Tsiangana */
        <a
            href="https://drive.google.com/uc?export=download&id=1T9M2PWQfeK2acnyO85VgJsiifbxOu8Xt"
            download={"Guillermo_Obando_CV.pdf"}
            className="button text-decoration-none text-black"
        >

            <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Download CV</span>
            </span>

        </a >

    );
}

export const Btn_3DContactaKnow = () => {
    return (
        /* From Uiverse.io by njesenberger */

        <div className=" d-flex justify-content-center gap-3">
            <button type="button" className="btn-contact mt-4">
                <div className="button-top">Know More!</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
            <button type="button" className="btn-contact mt-4">
                <div className="button-top">Contact Me</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
        </div>
    );
}

export const Btn_page_project = () => {
    return (
        /* From Uiverse.io by levxyca */
        <button className="btn-uid">Know More!</button>

    );
}