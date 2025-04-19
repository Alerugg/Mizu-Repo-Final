import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logomizu from "../../img/mizulogo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Cierra el menú si haces clic fuera del navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar" ref={navRef}>
      <div className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/dfagobkwv/image/upload/v1745082135/Agregar_un_t%C3%ADtulo_4_1_cmulcf.png"
            alt="Mizu Logo"
            className="navbar-logo-img"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <div className="navbar-nav mx-auto">
            <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>Inicio</a>
            <a className="nav-link" href="#services" onClick={() => setIsOpen(false)}>Servicios</a>
            <a className="nav-link" href="#conocenos" onClick={() => setIsOpen(false)}>Conócenos</a>
            <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
          </div>

          {/* WhatsApp mobile visible solo en colapsado */}
          <div className="navbar-whatsapp-mobile">
            <a
              href="https://wa.me/34691352596"
              className="navbar-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Escríbenos
            </a>
          </div>
        </div>

        {/* WhatsApp para escritorio */}
        <div className="d-none d-lg-flex ms-auto">
          <a
            href="https://wa.me/34691352596"
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
