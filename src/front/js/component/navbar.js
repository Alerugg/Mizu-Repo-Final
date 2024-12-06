import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar-mizu">
            <div className="navbar-mizu-container">
                {/* Logo */}
                <Link to="/" className="navbar-mizu-logo">
                    <h1>Mizu</h1>
                </Link>
                
                {/* Contactanos */}
                <ul className="navbar-mizu-links">
                    <li>
                        <a href="#contact" className="navbar-mizu-link">
                            Contáctanos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

