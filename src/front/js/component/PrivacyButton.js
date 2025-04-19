import { Link } from "react-router-dom";
import React from "react";


const PrivacyButton = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Link to="/privacy" className="privacy-button">
        Ver Política de Privacidad
      </Link>
    </div>
  );
};

export default PrivacyButton;
