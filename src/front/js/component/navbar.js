import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logomizu from "../../img/mizulogo.png"

export const Navbar = () => {
    return (
        <nav className="navbar-mizu">
            <div className="navbar-mizu-container">
                {/* Logo */}
                <Link to="/" className="navbar-mizu-logo">
                <img src={logomizu} alt="logo" className="navbar-image" />
                </Link>
                
                {/* Contactanos */}
                <ul className="navbar-mizu-links">
                    <li>
                        <a href="contact" className="navbar-mizu-link">
                            Contáctanos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

