import './Navbar.css'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

function Navbar()
{
    return (
        <nav className="navbar-mia">
            <img src={logo} alt="LOGO" className="logo"/>
            <ul className="nav-left">
                <li><NavLink to={`/`}> Home </NavLink> </li>
               <li><NavLink to={`/chisiamo`}> Chi siamo </NavLink></li>
            </ul>
            <ul className="nav-right">
                 <li><NavLink to={`/login`}> Login </NavLink></li>
               <li><NavLink to={`/singup`}> Registrazione </NavLink></li>
            </ul>
        </nav>
    );

}
export default Navbar