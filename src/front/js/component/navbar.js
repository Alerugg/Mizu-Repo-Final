import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logomizu from "../../img/mizulogo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        {/* Logo a la izquierda */}
        <Link className="navbar-brand" to="/">
          <img src={logomizu} alt="Mizu Logo" className="navbar-logo-img" />
        </Link>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centro: enlaces */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active" href="#home">Inicio</a>
            <a className="nav-link" href="#services">Servicios</a>
            <a className="nav-link" href="#about">Sobre Nosotros</a>
            <a className="nav-link" href="#contact">Contacto</a>
          </div>
        </div>

        {/* Derecha: WhatsApp */}
        <div className="d-none d-lg-flex ms-auto">
          <a
            href="https://wa.me/34600000000"
            className="navbar-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> Escríbenos
          </a>
        </div>
      </div>
    </nav>
  );
};
