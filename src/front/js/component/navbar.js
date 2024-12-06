import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-mizu">
            <div className="navbar-mizu-container">
                {/* Logo */}
                <div className="navbar-mizu-logo">
                    <h1>Mizu</h1>
                </div>

                {/* Links */}


                {/* Reserve Button */}
                <ul className={`navbar-mizu-links ${isOpen ? "open" : ""}`}>
                    <li><a href="#home" className="navbar-mizu-link">Inicio</a></li>
                    <li><a href="#contact" className="navbar-mizu-link">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};
