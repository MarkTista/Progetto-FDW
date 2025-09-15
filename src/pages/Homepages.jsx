import React, { useEffect, useState } from "react"; // Importa React e useState insieme
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Cards from "../components/Cards";
import ListaCorsiDisponibili from "../components/ListaCorsiDisponibili";
import "./Homepages.css";
import { getUser } from "../utils/getUser";

function Homepages() {
  const studente = getUser();

  const [corsi, setCorsi] = useState([]);

  const [corsiIscritti, setCorsiIscritti] = useState([]);

  const handleIscriviti = (corso) => {
    if (!corsiIscritti.find((c) => c.id === corso.id)) {
      setCorsiIscritti([...corsiIscritti, corso]);
    }
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "corsi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCorsi(data.corsi || []);
      })
      .catch((error) => {
        alert("Errore durante il caricamento dei corsi", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-student">
        <Container>
          <h1 className="h1-student">Tutti i corsi disponibili</h1>
          <ListaCorsiDisponibili corsi={corsi} onIscriviti={handleIscriviti} />
          {corsiIscritti.length > 0 && (
            <>
              <h3>Corsi a cui sei iscritto:</h3>
              <div className="container-card-student">
                {corsiIscritti.map((corso) => (
                  <Cards
                    key={corso.id}
                    id={corso.id}
                    title={corso.titolo}
                    text={corso.descrizione}
                    img={corso.img}
                    isAddCard={false}
                    role="studente"
                  />
                ))}
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default Homepages;
