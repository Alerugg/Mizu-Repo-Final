import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

// Páginas
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Individuales } from "./pages/individuales";
import { Parejas } from "./pages/parejas";
import { Servicio } from "./pages/servicio";
import { ContactUs } from "./pages/contactUs";
import { GiftCard } from "./pages/giftCard";
import { Single } from "./pages/single";

// Componentes globales
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


// Context
import injectContext from "./store/appContext";
import '@fortawesome/fontawesome-free/css/all.min.css';


// ✅ Importación del CSS global para estilos base y variables (nueva línea)
import "../styles/app.css"; // Asegúrate de que el archivo exista en src/styles/

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "")
        return <BackendURL />;

    return (
        <div className="App"> {/* Clase usada por app.css */}
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Individuales />} path="/individuales" />
                        <Route element={<Parejas />} path="/parejas" />
                        <Route element={<Servicio />} path="/servicio/:id" />
                        <Route element={<ContactUs />} path="/contact" />
                        <Route element={<GiftCard />} path="/giftcard" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
