import {useState} from 'react'
import Navbar from '../components/Navbar'
import './Login.css'
import Button from 'react-bootstrap/Button'

function Login()
{
    const [formData,setFormData]=useState({
    email:"",
    password:""
    });

    function handleSubmit(e)
    {
        e.preventDefault();
    }
    function handleInputChange(e)
    {
      setFormData({...formData, [e.target.name]: e.target.value});
        /*Serve ad aggiornare uno specifico campo dello stato formData,senza perdere altri campi
        ...=>spread operator copia tutti i campi dell'oggetto in un nuovo oggetto
        e.target =>è l'elemento che ha generatore l'evento
        [e.target.name] => CHIAVE DINAMICA, crea o aggiorna la proprietà con il nome contenuto in e.target.name
         */
    }

    return(
        <>
        <Navbar></Navbar>
        <div className="wrapper">
            <div className="form-box">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
            <div className="input-box">
                    <input name="email"value={formData.email} type="email" placeholder="Email" onChange={handleInputChange}required/>
                </div>
            <div className="input-box">
                    <input name="password" value={formData.password}type="password" placeholder="Password"onChange={handleInputChange}required />
                </div>
            <Button variant="outline-primary" type="submit">Accedi</Button>
         </form>
            </div>
        </div>
        </>

    );
}
export default Login;