import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModeContext from "./context/modeContext";
import WindowContext from "./context/screenContext";
import MenuContext from "./context/menuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ModeContext>
      <WindowContext>
        <MenuContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MenuContext>
      </WindowContext>
    </ModeContext>
  </React.StrictMode>
);
