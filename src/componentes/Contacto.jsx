import React from "react";
import Box from "@mui/material/Box";
import "../css/Contacto.css";
import contactos from "../datos/contactos";

function Contacto() {
    return (
        <Box className="contacto-container">
            <div className="contacto-title">
                Contacto
            </div>
            <Box className="contacto-items-container">
                {contactos.map(({id, icon, link, onClick}) => (
                    <Box key={id} className="contacto-item">
                        {link ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="contacto-link">
                                {icon}
                            </a>
                        ) : (
                            <button onClick={onClick} className="contacto-boton">
                                {icon}
                            </button>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Contacto;