// src/pages/Servicio.js
import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/servicio.css";

export const Servicio = () => {
    const { id } = useParams();

    // Unificar servicios individuales y de parejas
    const servicios = [
        // Servicios Individuales
        {
            id: "1",
            type: "Individual",
            title: "Masaje Relajante",
            subtitle: "Especial para el estrés y tensiones musculares",
            description: "Un masaje diseñado para ayudarte a relajarte y liberar la tensión acumulada.",
            details: "Este masaje incluye técnicas de relajación profunda con aceites esenciales. Ideal para quienes buscan desconectar del estrés diario.",
            image: "https://placehold.co/300x300",
        },
        {
            id: "2",
            type: "Individual",
            title: "Tratamiento Capilar",
            subtitle: "Perfecto para la caída del cabello",
            description: "Repara y revitaliza tu cabello con tratamientos japoneses exclusivos.",
            details: "Incluye técnicas como el masaje shiatsu capilar, exfoliación del cuero cabelludo y tratamiento con productos naturales.",
            image: "https://placehold.co/300x300",
        },
        // Servicios Parejas
        {
            id: "3",
            type: "Parejas",
            title: "Masaje en Pareja",
            subtitle: "Comparte un momento de relajación y conexión con tu ser querido.",
            description: "Disfruta de un ambiente íntimo y relajante diseñado para dos.",
            details: "Este masaje incluye velas aromáticas, música suave y aceites esenciales para una experiencia única en pareja.",
            image: "https://placehold.co/300x300",
        },
        {
            id: "4",
            type: "Parejas",
            title: "Spa Romántico",
            subtitle: "Disfruta de un ambiente íntimo y relajante",
            description: "Una experiencia romántica diseñada para compartir y desconectar del estrés diario.",
            details: "Incluye acceso a jacuzzi privado, exfoliación corporal para dos y masajes con aceites esenciales.",
            image: "https://placehold.co/300x300",
        },
    ];

    // Buscar el servicio seleccionado por ID
    const servicio = servicios.find((s) => s.id === id);

    return (
        <div className="servicio-container">
            {servicio ? (
                <>
                    <div className="servicio-header">
                        <img src={servicio.image} alt={servicio.title} className="servicio-image" />
                        <div className="servicio-info">
                            <h1 className="servicio-title">{servicio.title}</h1>
                            <h2 className="servicio-subtitle">{servicio.subtitle}</h2>
                        </div>
                    </div>
                    <div className="servicio-details">
                        <p className="servicio-description">{servicio.description}</p>
                        <p className="servicio-extra">{servicio.details}</p>
                        <button className="reservar-button">Reservar Ahora</button>
                    </div>
                </>
            ) : (
                <p>Servicio no encontrado.</p>
            )}
        </div>
    );
};
