// PAREJAS COMPONENTE
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ejemplo1 from "../../img/test3.png";
import "../../styles/parejas.css";

export const Parejas = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.services.length === 0) actions.fetchServices();
  }, []);

  const serviciosDuo = store.services.filter(s => s.service_type === "duo");

  const handleViewService = (id) => {
    navigate(`/servicio/${id}`);
  };

  return (
    <section className="parejas-section">
      <div className="parejas-overlay">
        <h1 className="parejas-title">Servicios en Pareja</h1>
        <div className="parejas-card-list">
          {serviciosDuo.length > 0 ? (
            serviciosDuo.map((servicio, index) => (
              <div key={servicio.id} className={`parejas-card-container ${index % 2 !== 0 ? "reverse" : ""}`}>
                <div className="parejas-img-wrapper">
                  <img
                    src={servicio.image || ejemplo1}
                    alt={servicio.title}
                    className="parejas-img"
                  />
                </div>
                <div className="parejas-card-body">
                  <h2 className="parejas-card-title">{servicio.title}</h2>
                  <h3 className="parejas-card-subtitle">{servicio.subtitle}</h3>
                  <p className="parejas-card-description">{servicio.description}</p>
                  <button className="parejas-card-btn" onClick={() => handleViewService(servicio.id)}>
                    Ver Servicio
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="parejas-empty-text">No hay servicios disponibles en este momento.</p>
          )}
        </div>
      </div>
    </section>
  );
};