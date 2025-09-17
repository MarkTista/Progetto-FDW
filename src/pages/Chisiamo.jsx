import React from "react";
import Navbar from "../components/Navbar";
import membro from "../assets/utente.png"
import "./Chisiamo.css";

function Chisiamo() {
  return (
    <>
      <Navbar />
      <div className="chi-siamo-container">
        <p>
          Siamo due studenti del <strong>Politecnico di Bari</strong> e questa è la nostra applicazione web
        </p>
        <p>
          Il nostro obiettivo è quello di creare un'applicazione web che
          permetta ad altri studenti come noi di iscriversi ai corsi, recuperare
          lezioni e avere sempre a disposizione il materiale didattico in
          maniera semplice e accessibile.
        </p>

        <div className="team-section">
            <div className="team-card">
              <img src={membro} alt="Membro 1" />
              <h3>Gianmarco Dibattista</h3>
              <p>Frontend</p>
            </div>
            <div className="team-card">
              <img src={membro} alt="Membro 2" />
              <h3>Alessio Carbone</h3>
              <p>Backend</p>
            </div>
          </div> 
        </div>     
    </>
  );
}

export default Chisiamo;
