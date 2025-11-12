import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Import the component
import "./index.css"; // Tailwind & other CSS

createRoot(document.getElementById("root")).render(<App />);
