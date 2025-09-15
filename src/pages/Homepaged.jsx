import { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import CardEditor from "../components/CardEditor";
import "../components/Cards.css";
import { useEffect } from "react";
function Homepaged() {
 
  const [listaCorsi, setListaCorsi] = useState([]); //lista corsi dal DB
  const [showForm, setShowForm] = useState(false); //serve che quando clicchi il tasto viene visuallizato form
  const [editingCourse, setEditingCourse] = useState(null); // serve per modificare corso


//Questo mi serve per mostrare a schermo tutti i corsi che nel caso sono presente dal docente
useEffect(() => {
  fetch(import.meta.env.VITE_API_URL + "/corsi", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nel recupero corsi");
      return res.json();
    })
    .then((data) => setListaCorsi(data))
    .catch((err) => console.error(err));
}, [listaCorsi]);

//POST aggiungi corso nuovo 
function handleAddCourse(nuovoCorso) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  fetch("http://localhost:8000/api/corsi/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
   body: JSON.stringify({
      ...nuovoCorso,
      docente: user._id   
    }),
  })
}

// PUT -> aggiorna un corso esistente
function handleChangeCourse(nuovoCorso) {
  fetch(import.meta.env.VITE_API_URL + "/corsi/" + nuovoCorso._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(nuovoCorso),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nell'aggiornamento corso");
      return res.json();
    })
    .then((corsoAggiornato) => {
      setListaCorsi((prev) =>
        prev.map((c) => (c._id === corsoAggiornato._id ? corsoAggiornato : c))
      );
      setShowForm(false);
    })
    .catch((err) => console.error(err));
}



  return (
    <>
    <Navbar></Navbar>
    <div className="container-card">
  {/* Se ci sono corsi li mostro, altrimenti mostro un messaggio */}
  {listaCorsi.length > 0 ? (
    listaCorsi.map((par) => (
      <Cards
        key={par._id}
        id={par._id}
        title={par.titolo}
        text={par.descrizione}
        img={par.img}
        isAddCard={false}
        onEdit={() => {
          setShowForm(true);
          setEditingCourse(par);
        }}
        onDelete={() => {handleDeleteCourse(par._id);
        }} role={"docente"}
      />
    ))
  ) : (
    <p>Nessun corso disponibile</p>
  )}

  {/* Card per aggiungere un nuovo corso */}
  <Cards
    key={0}
    title={"AGGIUNGI CORSO"}
    img={"https://media.istockphoto.com/id/1034906324/it/vettoriale/aggiungere.jpg?s=612x612&w=0&k=20&c=WaS15nwFYmTwEgsGXZ9FxpLx-ljA3qVCvAOnbiyB0IQ=" }
    text={"Aggiungere Corso"}
    isAddCard={true}
    onClick={() => {
      setShowForm(true);
      setEditingCourse(null);
    }}
    role={"docente"}
  />

  {/* Form per aggiungere o modificare corso */}
  {showForm && (
    <CardEditor
      initialValues={editingCourse}
      onUpdate={handleChangeCourse}
      onSave={handleChangeCourse}
      onClose={() => setShowForm(false)}
    />
  )}
</div>

    </>
  );
}
export default Homepaged;
