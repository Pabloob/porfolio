import "./css/App.css";
import TopBar from "./componentes/TopBar";
import Proyectos from "./componentes/Proyectos";
import Lenguajes from "./componentes/Lenguajes";
import Contacto from "./componentes/Contacto";
import { Box } from "@mui/material";
import { ThemeProvider, useTheme } from "./utils/ThemeContext";
import { useMemo } from "react";

function App() {
    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    );
}

function MainApp() {
    const { theme } = useTheme();
    const themeClass = useMemo(() => `app ${theme}`, [theme]);

    return (
        <div className={themeClass}>
            <Box className="app-container">
                <TopBar />
                <div className="body" role="main">
                    <div id="proyectos">
                        <Proyectos />
                    </div>
                    <div id="lenguajes">
                        <Lenguajes />
                    </div>
                    <div id="contacto">
                        <Contacto />
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default App;
