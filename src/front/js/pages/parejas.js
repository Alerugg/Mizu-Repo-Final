// src/pages/Parejas.js
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/parejas.css";
import ejemplo1 from "../../img/test3.png";

export const Parejas = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch services on component mount if not already fetched
        if (store.services.length === 0) {
            actions.fetchServices();
        }
    }, []);

    const handleViewService = (id) => {
        navigate(`/servicio/${id}`); // Redirige al detalle del servicio con params
    };

    return (
        <div className="parejas-container">
            <h1 className="parejas-title">Servicios en Pareja</h1>
            <div className="parejas-grid">
                {store.servicesDuos.length > 0 ? (
                    store.servicesDuos.map((servicio) => (
                        <div key={servicio.id} className="pareja-card">
                            <img
                                src={servicio.image || ejemplo1}
                                alt={servicio.title}
                                className="pareja-image"
                            />
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
                    ))
                ) : (
                    <p>No hay servicios disponibles en este momento.</p>
                )}
            </div>
        </div>
    );
};
