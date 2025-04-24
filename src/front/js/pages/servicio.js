// SERVICIO COMPONENTE
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ejemplo1 from "../../img/test3.png";
import "../../styles/servicio.css";

export const Servicio = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    if (store.services.length === 0) actions.fetchServices();
  }, []);

  useEffect(() => {
    if (store.services.length > 0) {
      const found = store.services.find(s => s.id === parseInt(id));
      setServicio(found);
    }
  }, [store.services, id]);

  const handleReservation = () => {
    if (servicio?.booking_url) {
      window.open(servicio.booking_url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="servicio-container">
      {servicio ? (
        <div className="servicio-card">
          <div className="servicio-header">
            <img
              src={servicio.image || ejemplo1}
              alt={servicio.title}
              className="servicio-image"
            />
            <div className="servicio-info">
              <h1 className="servicio-title">{servicio.title}</h1>
              <h2 className="servicio-subtitle">{servicio.subtitle}</h2>
              <h3 className="servicio-cost">Precio: {servicio.cost}€</h3>
              <p><strong>Duración:</strong> {servicio.duration}</p>
              <p><strong>Ubicación:</strong> {servicio.location}</p>
            </div>
          </div>

          <div className="servicio-details">
            <div className="servicio-section">
              <h4>Descripción</h4>
              <p>{servicio.description}</p>
            </div>

            <div className="servicio-section">
              <h4>¿Qué incluye?</h4>
              {servicio.includes?.split("\n").map((item, i) => (
                <p key={i} className="servicio-item">• {item}</p>
              ))}
            </div>

            {servicio.recommendations && (
              <div className="servicio-section">
                <h4>Recomendado para</h4>
                <p>{servicio.recommendations}</p>
              </div>
            )}

            <div className="servicio-section">
              <h4>Beneficios</h4>
              {servicio.benefits?.split("\n").map((item, i) => (
                <p key={i} className="servicio-item">✔ {item}</p>
              ))}
            </div>

            <div className="servicio-section">
              <h4>Notas importantes</h4>
              <p>{servicio.important_notes}</p>
            </div>

            <button
              className="reservar-button"
              onClick={handleReservation}
              disabled={!servicio.booking_url}
            >
              {servicio.booking_url ? "Reservar Ahora" : "No disponible"}
            </button>
          </div>
        </div>
      ) : (
        <p>Servicio no encontrado.</p>
      )}
    </div>
  );
};