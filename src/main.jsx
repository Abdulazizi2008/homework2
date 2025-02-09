import React from "react";
import App from "./App";
import { TodosProvider } from "./components/TodosProvider";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>
);
