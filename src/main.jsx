import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecipeProvider } from "./context/Recipe/index.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </StrictMode>
);
