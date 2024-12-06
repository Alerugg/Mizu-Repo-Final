// src/pages/Individuales.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/individuales.css";

export const Individuales = () => {
    const navigate = useNavigate();

    // Array ficticio con los servicios individuales
    const serviciosIndividuales = [
        {
            id: 1,
            title: "Masaje Relajante",
            subtitle: "Especial para el estrés y tensiones musculares",
            description: "Un masaje diseñado para ayudarte a relajarte y liberar la tensión acumulada.",
            details: "Este masaje incluye técnicas de relajación profunda con aceites esenciales. Ideal para quienes buscan desconectar del estrés diario.",
            image: "https://placehold.co/300x300",
        },
        {
            id: 2,
            title: "Tratamiento Capilar",
            subtitle: "Perfecto para la caída del cabello",
            description: "Repara y revitaliza tu cabello con tratamientos japoneses exclusivos.",
            details: "Incluye técnicas como el masaje shiatsu capilar, exfoliación del cuero cabelludo y tratamiento con productos naturales.",
            image: "https://placehold.co/300x300",
        },
        {
            id: 3,
            title: "Exfoliación Corporal",
            subtitle: "Renueva tu piel y elimina impurezas",
            description: "Un tratamiento que deja tu piel suave y radiante.",
            details: "Incluye exfoliantes naturales y masajes suaves para eliminar células muertas y promover la regeneración celular.",
            image: "https://placehold.co/300x300",
        },
    ];

    const handleViewService = (id) => {
        navigate(`/servicio/${id}`); // Redirige al detalle del servicio con params
    };

    return (
        <div className="individuales-container">
            <h1 className="individuales-title">Servicios Individuales</h1>
            <div className="individuales-grid">
                {serviciosIndividuales.map((servicio) => (
                    <div key={servicio.id} className="individual-card">
                        <img src={servicio.image} alt={servicio.title} className="individual-image" />
                        <div className="individual-content">
                            <h2 className="individual-title">{servicio.title}</h2>
                            <h3 className="individual-subtitle">{servicio.subtitle}</h3>
                            <p className="individual-description">{servicio.description}</p>
                            <button
                                className="individual-button"
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