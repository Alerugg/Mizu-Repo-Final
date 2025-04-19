import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/ContactFormMizu.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <form className="form-mizu" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-grid">
        <div className="form-group">
          <label>Nombre de la empresa*</label>
          <input
            type="text"
            {...register("empresa", { required: "Este campo es obligatorio" })}
            className={errors.empresa ? "error" : ""}
            placeholder="Nombre de la empresa"
          />
          {errors.empresa && <span>{errors.empresa.message}</span>}
        </div>

        <div className="form-group">
          <label>Nombre de la persona*</label>
          <input
            type="text"
            {...register("nombre", { required: "Este campo es obligatorio" })}
            className={errors.nombre ? "error" : ""}
            placeholder="Tu nombre completo"
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>

        <div className="form-group">
          <label>Correo electrónico*</label>
          <input
            type="email"
            {...register("email", {
              required: "Campo obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo inválido",
              },
            })}
            className={errors.email ? "error" : ""}
            placeholder="ejemplo@empresa.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            {...register("telefono")}
            placeholder="+34 600 000 000"
          />
        </div>
      </div>

      <button type="submit" className="form-submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
