import "./HeaderStyle.css";
import { NavLink } from "react-router-dom";
import "../globalCss/media.css";
import { Mode } from "../context/modeContext.js";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import "../globalCss/mode.css";

export default function Header() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;
  const setIsBlack = mode.setIsBlack;

  return (
    <nav
      className="header-nav"
      style={{
        backgroundColor: isBlack
          ? "rgba(128, 128, 128, 0.292)"
          : "rgb(236, 236, 236)",
        boxShadow: isBlack ? "none" : "0 0 10px 5px gray",
        transition: "0.5s",
      }}
    >
      <div className="header-left">
        <NavLink
          to="/"
          activeclassname="active"
          className={isBlack ? "nav-item Wfc" : "nav-item Bfc"}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeclassname="active"
          className={isBlack ? "nav-item Wfc" : "nav-item Bfc"}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          activeclassname="active"
          className={isBlack ? "nav-item Wfc" : "nav-item Bfc"}
        >
          Projects
        </NavLink>
      </div>
      <div className="header-middle">
        <button
          className={isBlack ? "mode-button Bbgc" : "mode-button Wbgc"}
          onClick={() => setIsBlack((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={faLightbulb}
            fontSize={"20px"}
            className={isBlack ? "bulb Wfc" : "bulb Bfc"}
          />
        </button>
      </div>
      <div className="header-right">
        <NavLink
          to="/experience"
          activeclassname="active"
          className={isBlack ? "nav-item Wfc" : "nav-item Bfc"}
        >
          Experience
        </NavLink>
        <NavLink
          to="/skills"
          activeclassname="active"
          className={isBlack ? "nav-item Wfc" : "nav-item Bfc"}
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname="active"
          className={isBlack ? "nav-item Wfc" : "nav-item Bfc"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
