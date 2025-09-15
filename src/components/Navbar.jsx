import "./Navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-mia">
      <div className="nav-left d-flex">
        <NavLink
          to="/"   className={({ isActive }) => (isActive ? "active" : "")} end >  Home
        </NavLink>
        <NavLink  to="/chisiamo"  className={({ isActive }) => (isActive ? "active" : "")} >  Chi siamo
        </NavLink>
      </div>
      <img src={logo} alt="LOGO" className="logo" />
      <div className="nav-right d-flex">
        <NavLink
          to="/login" className={({ isActive }) => (isActive ? "active" : "")}> Login
        </NavLink>
        <NavLink  to="/singup"  className={({ isActive }) => (isActive ? "active" : "")} > Registrazione</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
