import {useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import './Login.css'
import Button from 'react-bootstrap/Button'

function Singup()
{
    const [formData,setFormData]=useState({
    nome:"",
    cognome:"",
    email:"",
    password:"",
    organizzazione:""
    });

    function handleSubmit(e)
    {
        e.preventDefault(); //serve per evitare di aggiornare la pagina cosi da non perdere lo stato dell'app 
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
                <h1>Registrazione</h1>
                <div className="input-box">
                    <input name="nome" value={formData.nome} type="text" placeholder="Nome" onChange={handleInputChange} required />
                    {/* imposto value=..., cosi dico a React che il valore di questo input è controllato dallo stato */}
                    {/* imposto onChange=...,bisogna vedere tutte le modifiche che l'utente effettu, l'approccio Single Source Of Truth e perchè non mettendo sarebbe solo lettura essendo value */}
                </div>
                <div className="input-box">
                    <input name="cognome" value={formData.cognome} type="text" placeholder="Cognome" onChange={handleInputChange}required />
                </div>
                <div className="input-box">
                    <input name="email"value={formData.email} type="email" placeholder="Email" onChange={handleInputChange}required/>
                </div>
                <div className="input-box">
                    <input name="password" value={formData.password}type="password" placeholder="Password"onChange={handleInputChange}required />
                </div>
                <div className="input-box">
                    <label>Organizzazione:</label>
                    <select name="organizzazione" value={formData.organizzazione} onChange={handleInputChange}required >
                        <option name="studente" value="Studente">Studente</option>
                        <option name="docente" value="Docente">Docente</option>
                    </select>
                </div>
                <Button variant="outline-primary" type="submit">Registrati</Button>
            </form>
            </div>
        </div>
        </>
    
    );
}export default Singup;