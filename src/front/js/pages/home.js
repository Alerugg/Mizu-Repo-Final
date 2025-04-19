import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import ContactForm from "../component/contactForm";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Mizu</h1>
          <p>Relajación y tecnología en armonía</p>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="section-divider" />

      {/* SERVICIOS */}
      <section className="services">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-container">
          <div className="service-item" onClick={() => handleNavigate('/individuales')} style={{ cursor: 'pointer' }}>
            <img
              src="https://res.cloudinary.com/dfagobkwv/image/upload/v1745020646/1_INTRO_ANDR%C3%89S.mp4.00_00_07_08.Imagen_fija001_itfh5e.jpg"
              alt="Servicio Individual"
              className="service-img"
            />
            <div className="service-content">
              <h3>Servicios Individuales</h3>
              <p>
                Relájate con nuestras técnicas japonesas en camilla de agua. Perfecto para aliviar estrés, migrañas y dermatitis.
              </p>
            </div>
          </div>

          <div className="service-item" onClick={() => handleNavigate('/parejas')} style={{ cursor: 'pointer' }}>
            <img
              src="https://res.cloudinary.com/dfagobkwv/image/upload/v1745019948/2_GENERALES.mp4.00_00_05_10.Imagen_fija001_evt0wr.jpg"
              alt="Servicio en Pareja"
              className="service-img"
            />
            <div className="service-content">
              <h3>Experiencia en Pareja</h3>
              <p>
                Vive un momento único en pareja. Masajes sincronizados, aromas naturales y conexión emocional en un ambiente de lujo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="section-divider" />

      {/* SOBRE NOSOTROS */}
      <section className="about">
        <div className="about-container">
          <img
            src="https://res.cloudinary.com/dfagobkwv/image/upload/v1745021840/RELAJA_TU_MENTE_CUIDA_TU_CABELLO_2_whq9um.png"
            alt="Sobre Mizu"
            className="about-img"
          />
          <div className="about-content">
            <h2>Sobre Nosotros</h2>
            <p>
              En Mizu combinamos el arte del Head Spa japonés con innovación tecnológica. Nos especializamos en bienestar capilar, facial y emocional.
            </p>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="section-divider" />

      {/* FORMULARIO DE CONTACTO */}
      <section className="contact">
        <div className="container">
          <h2 className="services-title">Contáctanos</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};
