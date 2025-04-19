import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ejemplo1 from "../../img/test3.png";
import "../../styles/individuales.css";

export const Individuales = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [services, setServices] = useState([]);

    useEffect(() => {
        actions.fetchServices();
    }, []);

    useEffect(() => {
        if (store.servicesIndividuales) {
            setServices(store.servicesIndividuales);
        }
    }, [store.servicesIndividuales]);

    const handleNavigateToService = (id) => {
        navigate(`/servicio/${id}`);
    };

    return (
        <div className="indiv-page-wrapper">
            <h1 className="indiv-page-title">Servicios Individuales</h1>
            <div className="indiv-grid-container">
                {services && services.length > 0 ? (
                    services.map((service) => (
                        <div key={service.id} className="indiv-card">
                            <img 
                                src={service.image || ejemplo1} 
                                alt={service.title} 
                                className="indiv-card-image" 
                            />
                            <div className="indiv-card-content">
                                <h2 className="indiv-card-title">{service.title}</h2>
                                <h3 className="indiv-card-subtitle">{service.subtitle}</h3>
                                <p className="indiv-card-description">{service.description}</p>
                                <button 
                                    className="indiv-card-button"
                                    onClick={() => handleNavigateToService(service.id)}
                                >
                                    Ver Servicio
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="indiv-no-services">No hay servicios disponibles por ahora.</p>
                )}
            </div>
        </div>
    );
};
