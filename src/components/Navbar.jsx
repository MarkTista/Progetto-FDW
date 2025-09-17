import "./Navbar.css";
import {useState,useEffect} from'react';
import logo from "../assets/logo.png";
import { NavLink ,useNavigate} from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {setUser(JSON.parse(savedUser)); }
  }, []);
  
  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }
  return (
   <nav className="navbar-mia">
      <div className="nav-left d-flex">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")} end  >
          Home
        </NavLink>
        <NavLink
          to="/chisiamo"
          className={({ isActive }) => (isActive ? "active" : "")}
        > Chi siamo
        </NavLink>
      </div>
      <img src={logo} alt="LOGO" className="logo" />
     <div className="nav-right d-flex">
  {user ? (
    <>
      <span className="welcome"> Benvenuto   {user.nome}</span>
      <NavLink to="/login"className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLogout}  > Logout
      </NavLink>
    </>
  ) : (
    <>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")} > Login
      </NavLink>
      <NavLink to="/singup"className={({ isActive }) => (isActive ? "active" : "")}> Registrazione </NavLink>
   </>
  )}
</div>

    </nav>
  );
}

export default Navbar;
