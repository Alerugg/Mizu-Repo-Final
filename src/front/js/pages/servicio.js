import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/servicio.css";
import ejemplo1 from "../../img/test3.png";

export const Servicio = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [servicio, setServicio] = useState(null);

    useEffect(() => {
        // Fetch services if not already fetched
        if (store.services.length === 0) {
            actions.fetchServices();
        }
    }, []);

    useEffect(() => {
        // Find the service by ID once services are loaded
        if (store.services.length > 0) {
            const foundService = store.services.find((s) => s.id === parseInt(id));
            setServicio(foundService);
        }
    }, [store.services, id]);

    const handleReservation = () => {
        if (servicio && servicio.booking_url) {
            window.open(servicio.booking_url, "_blank", "noopener noreferrer");
        }
    };

    return (
        <div className="servicio-container">
            {servicio ? (
                <>
                    <div className="servicio-header">
                        <img src={servicio.image || ejemplo1} alt={servicio.title} className="servicio-image" />
                        <div className="servicio-info">
                            <h1 className="servicio-title">{servicio.title}</h1>
                            <h2 className="servicio-subtitle">{servicio.subtitle}</h2>
                            <h3 className="servicio-cost">Precio: {servicio.cost}€</h3>
                        </div>
                    </div>
                    <div className="servicio-details">
                        <p className="servicio-description">{servicio.description}</p>
                        <p className="servicio-extra">{servicio.details}</p>
                        <button
                            className="reservar-button"
                            onClick={handleReservation}
                            disabled={!servicio.booking_url}
                        >
                            {servicio.booking_url ? "Reservar Ahora" : "No disponible"}
                        </button>
                    </div>
                </>
            ) : (
                <p>Servicio no encontrado.</p>
            )}
        </div>
    );
};
