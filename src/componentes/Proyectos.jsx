import React, { useState, useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../css/Proyecto.css";
import proyectos from "../datos/proyectos.json";
import TecnologiaIcono from "../utils/iconMap";

function Proyectos() {
    const [index, setIndex] = useState(0);

    const prevProyecto = useCallback(() => {
        setIndex((index - 1 + proyectos.length) % proyectos.length);
    }, [index]);

    const nextProyecto = useCallback(() => {
        setIndex((index + 1) % proyectos.length);
    }, [index]);

    useEffect(() => {
        if (index >= proyectos.length) {
            setIndex(0);
        }
    }, [proyectos.length, index]);

    return (
        <Box className="proyectos-container">
            <div className="proyectos-icon-wrapper" onClick={prevProyecto}>
                <ArrowBackIos className="proyectos-icon" />
            </div>

            <Box className="proyectos-content">
                <div>
                    <a
                        href={proyectos[index].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proyectos-link"
                    >
                        {proyectos[index].nombre}
                    </a>
                </div>
                <div className="proyectos-descripcion">{proyectos[index].descripcion}</div>

                <div className="proyectos-tecnologias-container">
                    {proyectos[index].tecnologias.map((tec) => (
                        <div key={tec} className="proyectos-tecnologia">
                            <TecnologiaIcono nombre={tec} size={24} />
                            <div  className="proyectos-tecnologia-text">
                                {tec}
                            </div>
                        </div>
                    ))}
                </div>
            </Box>

            <div className="proyectos-icon-wrapper" onClick={nextProyecto}>
                <ArrowForwardIos className="proyectos-icon" />
            </div>
        </Box>
    );
}

export default Proyectos;
