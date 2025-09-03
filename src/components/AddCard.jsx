import { useState } from "react";
import './AddCard.css'
function AddCard({ onSave, onClose }) {

  const [nuovoCorso, setNuovoCorso] = useState({
    titolo: "",
    descrizione: "",
    img: ""
  });
  //creo uno stato per gestire i nuovi corsi 
  function handleChange(e){
    const { name, value } = e.target;
    setNuovoCorso({ ...nuovoCorso, [name]: value });
  };
  //serve perchè React ogni volta che l'utente scriverà qualcosa verrà aggiornato
  //[name] : value serve per aggiornare dinamicamente 

  function handleSave(){
    onSave(nuovoCorso); // passa i dati al genitore
    setNuovoCorso({ titolo: "", descrizione: "", img: "" }); //reset del form
  };

  return (
    
    <div className="inline-form">
        <form onSubmit={handleSave}>
            <input name="titolo" placeholder="Nome Corso"value={nuovoCorso.titolo}onChange={handleChange} required
            />
            <input name="descrizione" placeholder="Descrizione Corso" value={nuovoCorso.descrizione}onChange={handleChange} required
            />
            <input name="img" placeholder="URL immagine"value={nuovoCorso.img}onChange={handleChange} 
            />
            <button>Salva Corso</button>
            <button onClick={onClose}>Annulla</button>
        </form>
    </div>
  );
}
export default AddCard;
