import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarProvider } from "./context/carContext.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarProvider>
      <App />
    </CarProvider>
  </StrictMode>,
);
