/**
 * Configuración de desarrollo para el front‑end Mizu
 * – Hot‑reload + mapas de fuente
 * – WebSocket adaptado a Gitpod / Codespaces
 * – Proxy /api → BACKEND_URL (o localhost:3001)
 */

const webpack  = require("webpack");
const path     = require("path");
const { merge } = require("webpack-merge");
const common   = require("./webpack.common.js");
require("dotenv").config({ path: ".env" });               // ← lee BACKEND_URL

/* -------------------------------------------------------
 * 1.  Datos básicos
 * ----------------------------------------------------- */
const PORT = 3000;

/* -------------------------------------------------------
 * 2.  URL del WebSocket (hot‑reload) según entorno
 * ----------------------------------------------------- */
let publicUrl = `ws://localhost:${PORT}/ws`;

if (process.env.GITPOD_WORKSPACE_URL) {                   // Gitpod
  const [, host] = process.env.GITPOD_WORKSPACE_URL.split("://");
  publicUrl = `wss://${PORT}-${host}/ws`;
}

if (process.env.CODESPACE_NAME) {                         // Codespaces
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${PORT}.app.github.dev/ws`;
}

/* -------------------------------------------------------
 * 3.  Proxy dinámico a Flask
 *     BACKEND_URL en .env (ej. https://api.mizu.mx)
 *     Fallback: http://localhost:3001
 * ----------------------------------------------------- */
const proxyTarget = process.env.BACKEND_URL || "http://localhost:3001";

/* -------------------------------------------------------
 * 4.  Export
 * ----------------------------------------------------- */
module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",

  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: true,
    allowedHosts: "all",

    static: {
      directory: path.resolve(__dirname, "dist"),
    },

    client: { webSocketURL: publicUrl },

    /* ---------- PROXY /api ---------- */
    proxy: {
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
      },
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
