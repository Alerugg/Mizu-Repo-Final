import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/individuales.css"; // Asegúrate de crear este archivo

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
        <div className="indiv-section">
            <div className="indiv-section-overlay">
                <h1 className="indiv-title">Servicios Individuales</h1>
                <div className="indiv-card-list">
                    {services.length > 0 ? (
                        services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`indiv-card-container ${
                                    index % 2 === 0 ? "normal" : "reverse"
                                }`}
                            >
                                <div className="indiv-image-wrapper">
                                    <img
                                        src={"https://res.cloudinary.com/dfagobkwv/image/upload/v1745020646/1_INTRO_ANDR%C3%89S.mp4.00_00_07_08.Imagen_fija001_itfh5e.jpg"}
                                        alt={service.title}
                                        className="indiv-img"
                                    />
                                </div>
                                <div className="indiv-card-body">
                                    <h2 className="indiv-card-title">{service.title}</h2>
                                    <h4 className="indiv-card-subtitle">{service.subtitle}</h4>
                                    <p className="indiv-card-description">{service.description}</p>
                                    <button className="indiv-card-btn" onClick={() => handleNavigateToService(service.id)}>
                                        Ver Servicio
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="indiv-empty-text">No hay servicios disponibles por ahora.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
