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

function handleAddCourse(nuovoCorso) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  fetch("http://localhost:8000/api/corsi/a", {
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


    
  return (
    <>
    <Navbar></Navbar>
      <div className="container-card">
      {/* Card fissa per aggiungere nuovo corso */}
      <Cards
        key={0}
        title="AGGIUNGI CORSO"
        img="https://media.istockphoto.com/id/1034906324/it/vettoriale/aggiungere.jpg?s=612x612&w=0&k=20&c=WaS15nwFYmTwEgsGXZ9FxpLx-ljA3qVCvAOnbiyB0IQ="
        text="Aggiungere Corso"
        isAddCard={true}
        onClick={() => {
          setShowForm(true);
         // setEditingCourse(null);
        }}
        role="docente"
      />
      {/* Form per aggiungere/modificare corso */}
      {showForm &&(<CardEditor // initialValues={editingCourse} // onUpdate={handleUpdateCourse} 
      onSave={handleAddCourse}onClose={() => setShowForm(false)}
        />
      )}
    </div>
    </>
  );
}
export default Homepaged;
