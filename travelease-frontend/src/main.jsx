import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Map_Page from "./components/pages/map.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Map_Page />
  </StrictMode>
);
