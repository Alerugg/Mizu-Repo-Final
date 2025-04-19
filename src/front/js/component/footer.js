import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Sección 1: Sobre Mizu */}
        <div className="footer-section">
          <h3>Mizu HeadSpa</h3>
          <p>
            Fusionamos el arte del Head Spa japonés con tecnología para
            brindar experiencias únicas de bienestar capilar, facial y emocional.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul className="footer-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li>
              <Link to="/privacy">Política de Privacidad</Link>
            </li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> Av. Reina Victoria 51, 28003, Madrid</li>
            <li><i className="fas fa-phone"></i> +34 691 352 596</li>
            <li><i className="fas fa-envelope"></i> supgou@mizumadrid.com</li>
          </ul>
        </div>
      </div>

      {/* Pie final */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mizu Madrid. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
