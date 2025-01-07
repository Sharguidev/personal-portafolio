import React from "react";
import "./../../styles/btn_uploadFiles.css";
import toast from "react-hot-toast";

const BtnUploadFiles = () => {
    return (
        <input placeholder="Upload Images" type="file" className="input upload-box" id="upload" multiple
            onChange={(event) => {
                const file = event.target.files;

                if (file.length >= 4) {
                    toast.error("Only 3 files can be uploaded at a time");
                    document.getElementById("upload").value = "";
                }
            }}
        />
    );
}

export default BtnUploadFiles;