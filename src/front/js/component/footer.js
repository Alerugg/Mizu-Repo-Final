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
                        <a target="_blank" href="https://maps.app.goo.gl/boE4tNgasQzP8fWM9"  >
                        <p className="footer-address1"  >Av. Reina Victoria 51. BB Work Space.
                        Cabina #3, Madrid, España</p>
                        </a>
                    </div>

                    {/* Sede Servicios Duo */}
                    <div className="footer-address">
                        <h4>Sede de Servicios dobles</h4>
                        <a target="_blank" href="https://maps.app.goo.gl/boE4tNgasQzP8fWM9"  >
                        <p className="footer-address1"  >Calle de Ramos Carrión, 6, Madrid, España</p>
                        </a>
                    </div>
                </div>

                {/* Redes Sociales */}
                <section className="footer-socials mb-4">
                    {/* Facebook */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://www.facebook.com/profile.php?id=61557121016801"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                    >
                        <FaFacebookF />
                    </a>
                    {/* Instagram */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="https://www.instagram.com/mizumadrid/"
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
                        href="https://www.tiktok.com/@mizu_madrid"
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
