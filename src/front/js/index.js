//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client"; // 👈 cambio aquí
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "font-awesome/css/font-awesome.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application (React 18)
const container = document.querySelector("#app");
const root = createRoot(container);
root.render(<Layout />);
