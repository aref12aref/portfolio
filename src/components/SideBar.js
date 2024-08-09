import { useContext } from "react";
import { Mode } from "../context/modeContext";
import { NavLink } from "react-router-dom";
import "./SideBarStyle.css";

export default function SideBar() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  return (
    <nav
      className="side-nav"
      style={{
        backgroundColor: isBlack ? "rgba(0,0,0)" : "rgb(236, 236, 236)",
        boxShadow: isBlack ? "none" : "0 0 10px 5px gray",
        transition: "0.5s",
      }}
    >
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
    </nav>
  );
}
