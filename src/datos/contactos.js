import {MdEmail} from "react-icons/md";
import {SiGithub, SiLinkedin} from "react-icons/si";
import React from "react";
import {FaFileAlt} from "react-icons/fa";

function handleDownload() {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const isMobile = window.innerWidth <= 600;
const iconSize = isMobile ? 35 : 50;

const contactos = [
    { id: "email", icon: <MdEmail size={iconSize} color="#E34F26"/>, link: "mailto:pabloorbeab@gmail.com" },
    { id: "github", icon: <SiGithub size={iconSize} color="#1572B6"/>, link: "https://github.com/Pabloob" },
    { id: "linkedin", icon: <SiLinkedin size={iconSize} color="#F7DF1E"/>, link: "https://www.linkedin.com/in/pabloob5" },
    { id: "cv", icon: <FaFileAlt size={iconSize} color="#007BFF"/>, onClick: handleDownload },
];

export default contactos;
