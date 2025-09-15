import { useState } from "react";
import NavBar from "../components/Navbar";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { users } from "../User";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    fetch(import.meta.env.VITE_API_URL + "auth/login", {
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
        // salvo nel session storage l'utente e il token
        sessionStorage.setItem("user", JSON.stringify(data.user));
        sessionStorage.setItem("token", data.token);
        // Navigate based on user role
        if (data.user.role === "docente") {
          navigate("/Homepaged");
        } else if (data.user.role === "studente") {
          navigate("/Homepages");
        }
      })
      .catch((error) => {
        alert("Credenziali errate, riprovare", error);
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
      <NavBar></NavBar>
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
            <h1>Login</h1>
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
            <Button variant="outline-primary" type="submit">
              Accedi
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
