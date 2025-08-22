import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar()
{
    return (
        <div className="navbar">
            <img src={logo} alt="LOGO" className="logo"/>
            <ul class="nav-left">
                <li>Home</li>
                <li>Chi siamo</li>
            </ul>
            <ul class="nav-right">
                <li>Login</li>
                <li>Registrazione</li>
            </ul>
        </div>
    );

}
export default Navbar