import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";       // sigue tu archivo
import logomizu from "../../img/logosolo.png";

// en Layout.js o dentro del Navbar
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".nav-link").forEach(link=>{
    const sec = document.querySelector(link.getAttribute("href"));
    if(!sec) return;
    const top = sec.getBoundingClientRect().top;
    link.classList.toggle("active", top<=80 && top>=-sec.offsetHeight+80);
  });
});


export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#home">
        <img src={logomizu} alt="Mizu" className="navbar-logo-img" />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav mx-auto">
          <a className="nav-link" href="#home">Inicio</a>
          <a className="nav-link" href="#services">Servicios</a>
          <a className="nav-link" href="#conocenos">Conócenos</a>
          <a className="nav-link" href="#contact">Contacto</a>
        </div>
        <div className="d-none d-lg-flex">
          <a href="https://wa.me/34691352596" className="navbar-whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Escríbenos
          </a>
        </div>
      </div>
    </div>
  </nav>
);
