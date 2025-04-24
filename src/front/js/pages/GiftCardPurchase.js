// src/pages/GiftCardPurchase.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/giftcard.css";

export function GiftCardPurchase() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    giver_email:    "",
    receiver_email: "",
    service_id:     ""  // se llenará con el primer service.id
  });
  const [error, setError] = useState("");

  // Carga la lista de servicios disponibles para el selector
  useEffect(() => {
    fetch("/api/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        if (data.length > 0) {
          setForm(f => ({ ...f, service_id: data[0].id }));
        }
      })
      .catch(() => setError("No se pudieron cargar los servicios."));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/gift-cards/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.msg || "Error al crear la gift‑card");
      }
      const { checkout_url } = await res.json();
      window.location.href = checkout_url;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="gc-section">
      <h1 className="gc-title">Regala Bienestar con Mizu</h1>
      {error && <p className="gc-error">{error}</p>}
      <form className="gc-form" onSubmit={handleSubmit}>
        <div className="gc-form-group">
          <label htmlFor="giver_email">Tu correo electrónico*</label>
          <input
            type="email"
            id="giver_email"
            name="giver_email"
            value={form.giver_email}
            onChange={handleChange}
            required
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div className="gc-form-group">
          <label htmlFor="receiver_email">Correo destinatario (opcional)</label>
          <input
            type="email"
            id="receiver_email"
            name="receiver_email"
            value={form.receiver_email}
            onChange={handleChange}
            placeholder="destino@ejemplo.com"
          />
        </div>

        <div className="gc-form-group">
          <label htmlFor="service_id">Selecciona un servicio*</label>
          <select
            id="service_id"
            name="service_id"
            value={form.service_id}
            onChange={handleChange}
            required
          >
            {services.map(s => (
              <option key={s.id} value={s.id}>
                {s.title} — €{s.cost.toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="gc-btn">
          Continuar con el pago
        </button>
      </form>
    </section>
  );
}
