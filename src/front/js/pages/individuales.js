// src/pages/Individuales.js
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/individuales.css";
import ejemplo1 from "../../img/test3.png";
import ejemplo2 from "../../img/test4.png";

export const Individuales = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch services on component mount
        actions.fetchServices();
    }, []);

    const handleViewService = (id) => {
        navigate(`/servicio/${id}`); // Redirige al detalle del servicio con params
    };

    return (
        <div className="individuales-container">
            <h1 className="individuales-title">Servicios Individuales</h1>
            <div className="individuales-grid">
                {store.servicesIndividuales && store.servicesIndividuales.length > 0 ? (
                    store.servicesIndividuales.map((servicio) => (
                        <div key={servicio.id} className="individual-card">
                            <img src={servicio.image ? servicio.image : ejemplo1} alt={servicio.title} className="individual-image" />
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
                    ))
                ) : (
                    <p>No hay servicios disponibles en este momento.</p>
                )}
            </div>
        </div>
    );
};
