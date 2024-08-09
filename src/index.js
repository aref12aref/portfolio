import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModeContext from "./context/modeContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ModeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModeContext>
  </React.StrictMode>
);
