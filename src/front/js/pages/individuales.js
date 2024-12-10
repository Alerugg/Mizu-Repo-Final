// src/pages/Individuales.js
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/individuales.css";
import ejemplo1 from "../../img/test3.png";

export const Individuales = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch services on component mount
        actions.fetchServices();
    }, []);

    useEffect(() => {
        // Ensure services are loaded correctly
        if (store.servicesIndividuales) {
            setServices(store.servicesIndividuales);
        }
    }, [store.servicesIndividuales]);

    const handleViewService = (id) => {
        navigate(`/servicio/${id}`); // Redirige al detalle del servicio con params
    };

    return (
        <div className="individuales-container">
            <h1 className="individuales-title">Servicios Individuales</h1>
            <div className="individuales-grid">
                {services &&
                    services.reduce((rows, key, index) => {
                        if (index % 2 === 0) {
                            rows.push(services.slice(index, index + 2));
                        }
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <div key={rowIndex} className="individual-row">
                            {row.map((servicio) => (
                                <div key={servicio.id} className="individual-card">
                                    <img 
                                        src={servicio.image ? servicio.image : ejemplo1} 
                                        alt={servicio.title} 
                                        className="individual-image" 
                                    />
                                    <div className="individual-content">
                                        <div className="individual-texts">
                                            <h2 className="individual-title">{servicio.title}</h2>
                                            <h3 className="individual-subtitle">{servicio.subtitle}</h3>
                                            <p className="individual-description">{servicio.description}</p>
                                        </div>
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
                    ))}
            </div>
        </div>
    );
};