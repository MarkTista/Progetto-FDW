import React, { useEffect, useState } from "react"; // Importa React e useState insieme
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Cards from "../components/Cards";
import ListaCorsiDisponibili from "../components/ListaCorsiDisponibili";
import "./Homepages.css";

function Homepages() {

  const [corsiDisponibili, setCorsiDisponibili] = useState([]);
  const [corsiIscritti, setCorsiIscritti] = useState([]);
  const studente = JSON.parse(sessionStorage.getItem("user"));


function handleDeleteCourse(corso) {
  const corsoId = corso._id;
  const studenteId = studente._id;

  
  fetch(import.meta.env.VITE_API_URL+"/corsi/deletecourse/"+studenteId+"/"+corsoId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nella disiscrizione");
      return res.json();
    })
    .then(() => {setCorsiIscritti((prev) => prev.filter((c) => c._id !== corsoId));
    })
    .catch((err) => console.error("Errore disiscrizione:", err));
}
 //serve per iscriversi ai corsi
 const handleIscriviti = (corso) => 
  {
  if (corsiIscritti.find((c) => c._id === corso._id)) {
    console.log("Già iscritto a questo corso");
    return;
  }
  const studenteId = studente._id;
  fetch(import.meta.env.VITE_API_URL+"/corsi/addcorsi/"+studenteId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ corsoId: corso._id }), // meglio inviare solo l'id
  })
    .then((res) => res.json())
    .then((corsoSalvato) => {
      setCorsiIscritti((corso) => [...corso, corsoSalvato]);
    })
    .catch((err) => console.error("Errore iscrizione:", err));
};

//QUESTO MI PERMETTE DI RIEMPIERE LA TABELLA CON TUTTI I CORSI DI TUTTI I DOCENTI
  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL+"/corsi"+"/allcorsi",{
      method:"GET",
      headers:{
         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }
    }).then((res)=>res.json())
      .then((corsi) => setCorsiDisponibili(corsi))
  },[])

//QUESTO MI PERMETTE DI VISUALIZZARE COME CARD  TUTTI I CORSI A CUI è ISCRITTO LO STUDENTE
useEffect(() => {
  const studente = JSON.parse(sessionStorage.getItem("user"));
  if (!studente) return;
  fetch(import.meta.env.VITE_API_URL+"/corsi/allcorsi/"+studente._id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((corsi) => setCorsiIscritti(corsi))
    .catch((err) => console.error("Errore nel caricamento corsi iscritti:", err));
}, []);

  return (
    <>
      <Navbar />
      <div className="container-student">
        <Container>
          <h1 className="h1-student">TUTTI I CORSI DISPONIBILI</h1>
          <ListaCorsiDisponibili corsi={corsiDisponibili} onIscriviti={handleIscriviti} />
          {corsiIscritti.length > 0 && (
            <>
              <h3>Corsi a cui sei iscritto:</h3>
              <div className="container-card-student">
                {corsiIscritti.map((corso) => (
                  <Cards
                    key={corso._id}
                    id={corso._id}
                    title={corso.titolo}
                    text={corso.descrizione}
                    img={corso.img}
                    isAddCard={false}
                    role="studente"
                    onDelete={()=>handleDeleteCourse(corso)}
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
