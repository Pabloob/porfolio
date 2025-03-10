import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import "../css/Lenguajes.css";
import lenguajes from "../datos/lenguajes.json";
import TecnologiaIcono from "../utils/iconMap";

function Lenguajes() {
    const renderLenguajeItem = useMemo(() => {
        return lenguajes.map(({ lenguaje }) => (
            <Box key={lenguaje} className="lenguajes-item-container">
                <TecnologiaIcono nombre={lenguaje} size={60} />
                <div >{lenguaje}</div>
            </Box>
        ));
    }, []);

    return (
        <Box className="lenguajes-container">
            <div className="lenguajes-title">
                Tecnologías
            </div>
            <Box className="lenguajes-grid">
                {renderLenguajeItem}
            </Box>
        </Box>
    );
}

export default Lenguajes;
