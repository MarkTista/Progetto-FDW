import { useState } from "react";
import NavBar from "../components/Navbar";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault(e);
    fetch(import.meta.env.VITE_API_URL + "/auth/login", {
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
        if (data.user.role === "docente") {
          navigate(`/Homepaged/docente/${data.user._id}`);
        } else if (data.user.role === "studente") {
          navigate(`/Homepages/studente/${data.user._id}}`);
        }
      })
      .catch((error) => {
        alert("Credenziali errate, riprovare", error);
      });
  }
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value }); }

  return (
    <>
      <NavBar></NavBar>
      <div className="container-login-singup">
        <div className="form-box">
          <form method="post"onSubmit={handleSubmit} >
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
            <Button variant="outline-primary" type="submit">Accedi</Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
