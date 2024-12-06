import React, { useState } from "react";
import "../../styles/contactUs.css";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el correo electrónico con los datos del formulario.
        alert("Tu mensaje ha sido enviado correctamente.");
    };

    return (
        <div className="contact-us">
            {/* Formulario de Contacto */}
            <div className="contact-form">
                <h2>Contáctanos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="contact-button">Enviar Mensaje</button>
                </form>
            </div>

            {/* Información de Contacto */}
            <div className="contact-info">
                <h2>Información de Contacto</h2>
                <p><strong>Teléfonos:</strong> +34 912 345 678, +34 678 901 234 (WhatsApp)</p>
                <p><strong>Correo Electrónico:</strong> info@mizuheadspa.com</p>
                <div className="contact-addresses">
                    <div className="contact-address">
                        <h4>Sede de Servicios Individuales</h4>
                        <p>Calle Primavera, 123, Madrid, España</p>
                    </div>
                    <div className="contact-address">
                        <h4>Sede de Servicios Duo</h4>
                        <p>Avenida Verano, 456, Madrid, España</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
