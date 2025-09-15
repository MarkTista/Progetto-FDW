import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";

function Singup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    role: "studente", // Valore di default
  });

  function handleSubmit(e) {
    console.log("Form Data Submitted:", formData); // Debug: verifica i dati del form
    fetch(import.meta.env.VITE_API_URL + "auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("Registrazione avvenuta con successo!");
      })
      .catch((error) => {
        alert("Errore durante la registrazione, riprova più tardi");
      });
  }
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    /*Serve ad aggiornare uno specifico campo dello stato formData,senza perdere altri campi
        ...=>spread operator copia tutti i campi dell'oggetto in un nuovo oggetto
        e.target =>è l'elemento che ha generatore l'evento
        [e.target.name] => CHIAVE DINAMICA, crea o aggiorna la proprietà con il nome contenuto in e.target.name
         */
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="container-login-singup">
        <div className="form-box">
          <form
            method="post"
            action={"#"}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <h1>Registrazione</h1>
            <div className="input-box">
              <input
                name="nome"
                value={formData.nome}
                type="text"
                placeholder="Nome"
                onChange={handleInputChange}
                required
              />
              {/* imposto value=..., cosi dico a React che il valore di questo input è controllato dallo stato */}
              {/* imposto onChange=...,bisogna vedere tutte le modifiche che l'utente effettu, l'approccio Single Source Of Truth e perchè non mettendo sarebbe solo lettura essendo value */}
            </div>
            <div className="input-box">
              <input
                name="cognome"
                value={formData.cognome}
                type="text"
                placeholder="Cognome"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                name="password"
                value={formData.password}
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label>Ruolo:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option name="studente" value="studente">
                  Studente
                </option>
                <option name="docente" value="docente">
                  Docente
                </option>
              </select>
            </div>
            <Button variant="outline-primary" type="submit">
              Registrati
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Singup;
