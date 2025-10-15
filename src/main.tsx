import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index"; // or "./pages/index" if lowercase in your repo
import "./index.css"; // safe to keep even if you don’t have it

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
