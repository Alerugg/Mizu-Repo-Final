// ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "../../styles/ContactFormMizu.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre completo"
              {...register("name", { required: "Este campo es obligatorio" })}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "Correo obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo no válido",
                },
              })}
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <textarea
              rows="5"
              placeholder="Tu mensaje"
              {...register("message", { required: "Por favor escribe un mensaje" })}
            ></textarea>
            {errors.message && (
              <p className="error-text">{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className="btn-form">Enviar mensaje</button>

          {isSubmitSuccessful && (
            <motion.p
              className="success-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ¡Gracias por tu mensaje! Te responderemos pronto.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;