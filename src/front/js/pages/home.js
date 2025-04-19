import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../component/ServiceCard";
import ContactForm from "../component/contactForm";
import logoHero from "../../img/mizulogo.png";

export const Home = () => {
  const nav = useNavigate();
  const go = p => () => nav(p);

  return (
    <main>
      {/* HERO con zoom‑in‑out */}
      <section className="hero" id="home">
        <motion.img
          src={logoHero}
          alt="Mizu HeadSpa Madrid"
          className="imgHero"
          initial={{ scale:0.8, opacity:0 }}
          animate={{ scale:[0.8,1.08,1], opacity:1 }}
          transition={{ duration:1.6, ease:"easeOut" }}
        />
      </section>

      {/* SERVICIOS */}
      <section className="services" id="services">
        <h2 className="services-title fw-bold">Nuestros Servicios</h2>

        {/* --- Individual --- */}
        <ServiceCard
          img="https://res.cloudinary.com/dfagobkwv/image/upload/f_auto,q_auto,w_900/v1745020646/1_INTRO_ANDRÉS.mp4.00_00_07_08.Imagen_fija001_itfh5e.jpg"
          title="Experiencia Individual"
          subtitle="Un ritual solo para ti"
          to={go("/individuales")}
        >
          <p className="service-desc">
            Regálate un momento de desconexión y bienestar con nuestras experiencias
            personalizadas de Head Spa. Un entorno diseñado para sanar desde lo más profundo.
          </p>
          <ul className="service-list">
            <li>Evaluación capilar y facial con equipo profesional</li>
            <li>Masaje en camilla de agua con temperatura regulada</li>
            <li>Técnicas japonesas para liberar tensiones acumuladas</li>
            <li>Ideal para personas con estrés, ansiedad o fatiga crónica</li>
          </ul>
        </ServiceCard>

        {/* --- Parejas (vuelve!) --- */}
        <ServiceCard
          reverse
          img="https://res.cloudinary.com/dfagobkwv/image/upload/f_auto,q_auto,w_900/v1745019948/2_GENERALES.mp4.00_00_05_10.Imagen_fija001_evt0wr.jpg"
          title="Experiencia Doble"
          subtitle="Comparte un ritual con quien tú elijas"
          to={go("/parejas")}
        >
          <p className="service-desc">
            Una experiencia diseñada para disfrutar en compañía. Ideal para madres e hijas,
            mejores amigas o cualquier persona especial con la que desees reconectar.
          </p>
          <ul className="service-list">
            <li>Espacio compartido con dos camillas de agua sincronizadas</li>
            <li>Masajes y tratamientos simultáneos con técnicas japonesas</li>
            <li>Aromaterapia, sonidos y ambiente cuidadosamente preparado</li>
            <li>Perfecto para crear recuerdos significativos</li>
          </ul>
        </ServiceCard>
      </section>

      {/* TERAPEUTAS */}
      <section className="terapeutas-section" id="conocenos">
        <h2 className="terapeutas-title fw-bold">Conoce a tus Terapeutas</h2>

        <div className="terapeutas-grid">
          {[
            { name:"Eva",        img:"https://placehold.co/200x300" },
            { name:"Alejandra",  img:"https://placehold.co/200x300" },
            { name:"Aiskel",     img:"https://placehold.co/200x300" },
            { name:"Dari",       img:"https://placehold.co/200x300" }
          ].map(t=>(
            <div className="terapeuta-card" key={t.name}>
              <img src={t.img} alt={`Terapeuta ${t.name}`} className="terapeuta-img" />
              <div className="terapeuta-name">{t.name}</div>
              <div className="terapeuta-role">Terapeuta</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="services-title fw-bold">¿Te interesa nuestra marca? Ponte en contacto.</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};
