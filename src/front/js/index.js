import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout";

import "../styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";

createRoot(document.getElementById("app")).render(<Layout />);
