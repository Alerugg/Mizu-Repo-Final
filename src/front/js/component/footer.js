import React from "react";
import "../../styles/footer.css";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter, FaGoogle, FaLinkedinIn, FaGithub, FaFacebookF, FaTiktok } from "react-icons/fa";
import logosolo from "../../img/logosolo.png"

export const Footer = () => {
    return (
        <footer className="footer-mizu bg-body-tertiary text-center">
            <div className="footer-container container p-4 pb-0">
                {/* Direcciones */}
                <div className="footer-addresses">
                    {/* Sede Servicios Individuales */}
                    <div className="footer-address">
                        <h4>Sede de Servicios Individuales</h4>
                        <p>Calle Primavera, 123, Madrid, España</p>
                    </div>

                    {/* Sede Servicios Duo */}
                    <div className="footer-address">
                        <h4>Sede de Servicios Duo</h4>
                        <p>Calle de Ramos Carrión, 6, Madrid, España</p>
                    </div>
                </div>

                {/* Redes Sociales */}
                <section className="footer-socials mb-4">
                    {/* Facebook */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                    >
                        <FaFacebookF />
                    </a>
                    {/* Google */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                    >
                        <FaGoogle />
                    </a>
                    {/* Instagram */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                    >
                        <SlSocialInstagram />
                    </a>
                    {/* TikTok */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#000000" }}
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                    >
                        <FaTiktok />
                    </a>
                </section>
            </div>

            {/* Copyright */}
            <div className="footer-copyright text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                &copy; 2024 Mizu Madrid HeadSpa. Todos los derechos reservados.
            </div>
        </footer>
    );
};
