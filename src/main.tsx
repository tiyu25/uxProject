import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/reset.css";
import "./assets/css/layout.css";
import "./assets/css/section.css";
import './assets/css/subapp.css';
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
