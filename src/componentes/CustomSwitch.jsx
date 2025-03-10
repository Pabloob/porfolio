import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../utils/ThemeContext";
import "../css/CustomSwitch.css";
import { useMemo } from "react";

function CustomSwitch() {
    const { theme, toggleTheme } = useTheme();

    const Icon = useMemo(
        () => (theme === "dark" ? <MdDarkMode size={18} color="#90CAF9" /> : <MdLightMode size={18} color="#FFD700" />),
        [theme]
    );

    return (
        <div className={`custom-switch ${theme === "dark" ? "checked" : ""}`} onClick={toggleTheme}>
            <div className="switch-thumb">{Icon}</div>
        </div>
    );
}

export default CustomSwitch;
