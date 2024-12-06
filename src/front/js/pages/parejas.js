// src/pages/Parejas.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación
import "../../styles/parejas.css";

export const Parejas = () => {
    const navigate = useNavigate();

    // Array ficticio con los servicios para parejas
    const serviciosParejas = [
        {
            id: 1,
            title: "Masaje en Pareja",
            subtitle: "Conecta con tu ser querido en un ambiente relajante",
            description: "Un masaje diseñado para compartir momentos únicos y relajantes.",
            details: "Este masaje incluye técnicas de relajación sincronizadas y aromaterapia personalizada para dos personas.",
            image: "https://placehold.co/300x300",
        },
        {
            id: 2,
            title: "Spa Romántico",
            subtitle: "Perfecto para aniversarios y celebraciones especiales",
            description: "Disfruta de un spa íntimo con detalles exclusivos para parejas.",
            details: "Incluye sauna privado, masaje relajante y una experiencia de desconexión total en pareja.",
            image: "https://placehold.co/300x300",
        },
        {
            id: 3,
            title: "Experiencia Mizu para Dos",
            subtitle: "Relajación y cuidado capilar juntos",
            description: "Una experiencia única que combina relajación profunda con tratamientos capilares personalizados.",
            details: "Incluye masaje shiatsu capilar, mascarillas revitalizantes y técnicas de spa para cuero cabelludo.",
            image: "https://placehold.co/300x300",
        },
    ];

    const handleViewService = (id) => {
        navigate(`/servicio/${id}`); // Redirige al detalle del servicio con params
    };

    return (
        <div className="parejas-container">
            <h1 className="parejas-title">Servicios en Pareja</h1>
            <div className="parejas-grid">
                {serviciosParejas.map((servicio) => (
                    <div key={servicio.id} className="pareja-card">
                        <img src={servicio.image} alt={servicio.title} className="pareja-image" />
                        <div className="pareja-content">
                            <h2 className="pareja-title">{servicio.title}</h2>
                            <h3 className="pareja-subtitle">{servicio.subtitle}</h3>
                            <p className="pareja-description">{servicio.description}</p>
                            <button
                                className="pareja-button"
                                onClick={() => handleViewService(servicio.id)}
                            >
                                Ver Servicio
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
