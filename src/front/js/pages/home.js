// src/components/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import individuales from "../../img/test1.png";
import parejas from "../../img/test2.png";
import giftcard from "../../img/GIFTMIZUDEC.webp";
import mizugif from "../../img/mizugif.gif";
import "../../styles/home.css";

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, title: "Relaja tu mente, cuida tu cabello", subtitle: "Descubre la experiencia Mizu HeadSpa", image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG8yMXFtMzgwcGRhMmpmajc3N3VwNDQ0aW40aHp2cDRzOXdvMmUxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nj8b4AlbRUihG/giphy.webp" },
        { id: 2, title: "Bienestar único", subtitle: "Inspirado en técnicas japonesas para tu cuidado capilar", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW5pajB3ZHFhZnJoazlseTVoZzlmbDluMWd5dnRwNzdiNTBta2xteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uWAMPqg3p2TPBEOWT4/giphy.webp" }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-mizu">
            {/* Jumbotron Slider */}
            <div className="jumbotron-mizu">
                <div
                    className="jumbotron-slide"
                    style={{
                        backgroundImage: `url(${slides[currentSlide].image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="jumbotron-overlay">
                        <h1 className="jumbotron-title">{slides[currentSlide].title}</h1>
                        <p className="jumbotron-subtitle">{slides[currentSlide].subtitle}</p>
                    </div>
                </div>
                <div className="jumbotron-controls">
                    <button className="control-button" onClick={handlePrevSlide}>&lt;</button>
                    <button className="control-button" onClick={handleNextSlide}>&gt;</button>
                </div>
            </div>

            {/* About Section */}
            <div className="section-about">
                <h2 className="section-title">Sobre Nosotros</h2>
                <p className="section-description">
                    En Mizu, nos dedicamos a brindarte una experiencia única de head spa que fusiona el autocuidado y el cuidado capilar con tratamientos naturales. Nuestro servicio exclusivo incluye masajes capilares inspirados en técnicas japonesas como AMMA-SHIATSU, proporcionando una profunda relajación mientras revitalizamos tu cabello.
                </p>
                <img src={mizugif} alt="Sobre nosotros" className="about-image" />
            </div>

            {/* Services Section */}
            <div className="section-services">
                <h2 className="section-title">Nuestros Servicios</h2>
                <div className="services-grid">
                    <Link to="/individuales" className="link-deco" >
                        <div className="service-card">
                            <img src={individuales} alt="Servicio 1" className="service-image" />
                            <h3 className="service-title">Servicios Individuales</h3>
                            <p className="service-description">Relájate con tratamientos personalizados.</p>
                        </div>
                    </Link>
                    <Link to="/parejas" className="link-deco">
                        <div className="service-card">
                            <img src={parejas} alt="Servicio 2" className="service-image" />
                            <h3 className="service-title">Servicios en Pareja</h3>
                            <p className="service-description">Comparte momentos únicos de relajación.</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Gift Section */}
            <div className="section-gifts">
                <h2 className="section-title">Regala Mizu</h2>
                <p className="section-description">Un regalo único para tus seres queridos.</p>
                <Link to="/giftcard" className="link-deco">
                    <img src={giftcard} alt="Regala Mizu" className="gift-image" />
                </Link>
            </div>
        </div>
    );
};

// https://placehold.co/800x400?text=Regala+Mizu
