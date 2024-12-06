import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/giftCard.css";
import { QRCodeCanvas } from "qrcode.react";

export const GiftCard = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [recipientData, setRecipientData] = useState({
    name: "",
    email: "",
    message: "",
    type: "individual",
  });
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Masaje Relajante Individual",
      description: "Un masaje perfecto para aliviar el estrés y revitalizar cuerpo y mente.",
      type: "individual",
    },
    {
      id: 2,
      name: "Experiencia Spa Duo",
      description: "Una experiencia única para compartir con alguien especial.",
      type: "duo",
    },
  ];

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la compra de la Gift Card, generar el QR y enviarlo al destinatario.
    alert("Tu Gift Card ha sido creada y enviada correctamente.");
    navigate("/");
  };

  return (
    <div className="gift-card">
      <h1>Compra una Gift Card</h1>
      <p>Selecciona un servicio y regala una experiencia inolvidable.</p>

      {/* Selección de Servicios */}
      <div className="gift-card-services">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              service.type === "individual" ? "service-individual" : "service-duo"
            }`}
            onClick={() => handleSelectService(service)}
          >
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Formulario de Datos del Destinatario */}
      {selectedService && (
        <div className="gift-card-form">
          <h2>Detalles del Regalo</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre del destinatario</label>
              <input
                type="text"
                id="name"
                name="name"
                value={recipientData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico del destinatario</label>
              <input
                type="email"
                id="email"
                name="email"
                value={recipientData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje Personalizado</label>
              <textarea
                id="message"
                name="message"
                value={recipientData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="gift-card-button">Generar Gift Card</button>
          </form>
        </div>
      )}

      {/* Código QR (Demostración) */}
      {selectedService && (
        <div className="gift-card-qr">
          <h3>Previsualización del Código QR</h3>
          <QRCodeCanvas value={`https://mizuheadspa.com/reservar?service=${selectedService.id}`} size={200} />
        </div>
      )}
    </div>
  );
};
