import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mizu</h3>
          <p>
            Relajación y tecnología unidas para ofrecerte experiencias únicas.
            Bienestar a través de nuestros rituales japoneses.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> Calle Sakura 108, Madrid</li>
            <li><i className="fas fa-phone"></i> +34 666 111 222</li>
            <li><i className="fas fa-envelope"></i> info@mizu.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Mizu. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
