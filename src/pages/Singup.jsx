import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import Button from "react-bootstrap/Button";

function Singup() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    role: "studente", // Valore di default
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch(import.meta.env.VITE_API_URL + "/auth/register", {
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
        alert("Registrazione avvenuta con successoo!");
      })
      .catch((error) => {
        alert("Errore durante la registrazione, riprova più tardi");
      });
  }
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="container-login-singup">
        <div className="form-box">
          <form method="post" onSubmit={handleSubmit}>
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
