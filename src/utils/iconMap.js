import { FaDatabase, FaJava, FaProjectDiagram } from "react-icons/fa";
import React, { useMemo } from "react";
import "../css/IconMap.css";
import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPython,
    SiReact,
    SiKotlin,
    SiFirebase,
    SiSpringboot,
    SiMaterialdesign,
    SiAndroid,
    SiDatabricks,
    SiGodotengine,
    SiSqlite
} from "react-icons/si";


const iconMap = {
    html: { component: SiHtml5, color: "#E34F26" },
    css: { component: SiCss3, color: "#1572B6" },
    javascript: { component: SiJavascript, color: "#F7DF1E" },
    react: { component: SiReact, color: "#61DAFB" },
    mongodb: { component: SiMongodb, color: "#47A248" },
    python: { component: SiPython, color: "#306998" },
    git: { component: SiGit, color: "#F05032" },
    mysql: { component: SiMysql, color: "#4479A1" },
    postgresql: { component: SiPostgresql, color: "#336791" },
    java: { component: FaJava, color: "#007396" },
    kotlin: { component: SiKotlin, color: "#7F52FF" },
    firebase: { component: SiFirebase, color: "#FFCA28" },
    jetpackcompose: { component: SiAndroid, color: "#3DDC84" },
    mpandroidchart: { component: SiAndroid, color: "#3DDC84" },
    material3: { component: SiMaterialdesign, color: "#757575" },
    navigationcompose: { component: SiAndroid, color: "#3DDC84" },
    springboot: { component: SiSpringboot, color: "#6DB33F" },
    basesdedatos: { component: FaDatabase, color: "#A6A6A6" },
    mvc: { component: FaProjectDiagram, color: "#FF9800" },
    dao: { component: FaProjectDiagram, color: "#4CAF50" },
    dto: { component: FaProjectDiagram, color: "#2196F3" },
    gdscript: { component: SiGodotengine, color: "#2196F3" },
    sqlite: { component: SiSqlite, color: "#7dc1f6" },
};

function TecnologiaIcono({ nombre, size }) {
    const normalizedNombre = nombre.toLowerCase().replace(/\s+/g, "");
    const { component: IconComponent, color } = useMemo(
        () => iconMap[normalizedNombre] || { component: SiDatabricks, color: "#FF5722" },
        [normalizedNombre]
    );

    return (
        <span
            className="tecnologia-icono"
            role="img"
            aria-label={nombre}
        >
            <IconComponent size={size} color={color} />
        </span>
    );
}

export default TecnologiaIcono;
