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
        if (store.servicesDuos.length === 0) {
            actions.fetchServices();
        }
    }, []);

    const divideServicesIntoRows = (services, rowSize) => {
        const rows = [];
        for (let i = 0; i < services.length; i += rowSize) {
            rows.push(services.slice(i, i + rowSize));
        }
        return rows;
    };

    const handleViewService = (id) => {
        navigate(`/servicio/${id}`); // Redirige al detalle del servicio con params
    };

    return (
        <div className="parejas-container">
            <h1 className="parejas-title">Servicios en Pareja</h1>
            <div className="parejas-grid">
                {store.servicesDuos &&
                    divideServicesIntoRows(store.servicesDuos, 2).map((row, rowIndex) => (
                        <div key={rowIndex} className="parejas-row">
                            {row.map((servicio) => (
                                <div key={servicio.id} className="pareja-card">
                                    <img
                                        src={servicio.image || ejemplo1}
                                        alt={servicio.title}
                                        className="pareja-image"
                                    />
                                    <div className="pareja-content">
                                        <div className="pareja-texts">
                                            <h2 className="pareja-title">{servicio.title}</h2>
                                            <h3 className="pareja-subtitle">{servicio.subtitle}</h3>
                                            <p className="pareja-description">{servicio.description}</p>
                                        </div>
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
                    ))}
            </div>
        </div>
    );
};