import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
    return (
        <footer className="footer-mizu">
            <div className="footer-container">
                {/* Redes Sociales */}
                <div className="footer-socials">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                    >
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                    >
                        <i className="fab fa-tiktok"></i> TikTok
                    </a>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    <p>&copy; 2024 Mizu HeadSpa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
