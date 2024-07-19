import "./HeaderStyle.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header-nav">
      <div className="header-left">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/portfolio" className="nav-item">
          Portfolio
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/skills" className="nav-item">
          Skills
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
