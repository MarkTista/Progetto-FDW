import { useState } from "react";
import {users,corsi} from "../User";
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import AddCard from '../components/AddCard';
import '../components/Cards.css'
function Homepaged ()
{
  const docenteLoggatoId = 1;
  const docente = users.find(user => user.id === docenteLoggatoId && user.role === "docente");

  const [listaCorsi, setListaCorsi] = useState(corsi);

  const [showForm, setShowForm] = useState(false);

  const corsoTrovato = listaCorsi.filter(corso => corso.id_docente === docente.id);

  const handleAddCourse = (nuovoCorso) => {
    const nuovoCorsoCompleto = {
      id: Date.now(),              
      id_docente: docente.id,      
      lezioni: [],                 
      ...nuovoCorso
    };

    setListaCorsi([...listaCorsi, nuovoCorsoCompleto]);
    setShowForm(false);
  }
    return(
        <>
        <Navbar></Navbar>
        {/*METODO PER AGGIUNGERE IN MANIERA AUTOMATICO*/}
        <div className="container-card">
        {corsoTrovato.map(par=>(
            <Cards 
                key={par.id}
                id={par.id}
                title={par.titolo}
                text={par.descrizione}
                img={par.img}
                isAddCard={false}
                role={docente.role}
                >
            </Cards>
        ))} 
        <Cards
                key={0}
                title={"AGGIUNGI CORSO"}
                img={"https://media.istockphoto.com/id/1034906324/it/vettoriale/aggiungere.jpg?s=612x612&w=0&k=20&c=WaS15nwFYmTwEgsGXZ9FxpLx-ljA3qVCvAOnbiyB0IQ="}
                text={"Aggiungere Corso"}
                isAddCard={true}
                onClick={() => setShowForm(!showForm)}
                role={docente.role}>
                {/*sto passando al props il setter con setShowForm vero o falso*/}
        </Cards>

        {showForm && <AddCard onSave={handleAddCourse} onClose={() => setShowForm(false)} />}
        {/* RENDER CONDIZIONALE se showForm è vero allora React renderizza il componente AddCard e vengono passate due props
        onSave funzione che aggiunge il nuovo corso allo stato listaCorsi
        onClose funzione che chiude il form senza salvare
        */}
        {/*
        Allora viene passato una funziona anonima come proprs"onClick" che quando viene cliccato viene settato true però da Cards
        setShowForm viene messo true e viene renderizzato il componente e viene passato come riferimento utilizzando onSave la funzione handleAddCurse
        dove una volta aggiunto il corso in AddCard.jsx verrà richiamtra questa funziona 
        */ }
        </div> 
        </>
    );
}export default Homepaged;