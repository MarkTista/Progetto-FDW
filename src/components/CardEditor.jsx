import { useState,useEffect } from "react";
import './CardEditor.css'
function CardEditor({ onSave, onClose,onUpdate,initialValues }) {

  const [nuovoCorso, setNuovoCorso] = useState({
    titolo: "",
    descrizione: "",
    img: ""
  });

    useEffect(() => {
    if (initialValues) {
      setNuovoCorso(initialValues);
    } else {
      setNuovoCorso({
        titolo:"",
        descrizione:"",
        img:""
      })
    }
  }, [initialValues]);

  //creo uno stato per gestire i nuovi corsi 
  function handleChange(e){
    const { name, value } = e.target;
    setNuovoCorso({ ...nuovoCorso, [name]: value });
  };

  //Ad ogni scrittura nel form, viene preso da e.target il nome del campo e il valore che assume
  //viene abilitato  il setter "SetNuovoCorso" che serve a prende il vecchio oggetto e gli va ad aggiungere le proprietà nuove
  function handleSave(e){
    e.preventDefault();
    if (initialValues) {
       onUpdate(nuovoCorso); // se stai modificando → chiama la funzione di update
    } else{
       onSave(nuovoCorso);   // se stai aggiungendo → chiama la funzione di save
    }
  };
  //viene chiamato tramite riferimento la funzione per aggiungere il corso passandogli la variaible di stato con i nuovo corsi che dovranno essere aggiunti

  return (
    
    <div className="inline-form">
        <form method="post"
            action={"#"}
            onSubmit={(e) => {
              e.preventDefault();
              handleSave(e);
            }}>
            <input name="titolo" placeholder="Nome Corso"value={nuovoCorso.titolo} onChange={handleChange} required
            />
            <input name="descrizione" placeholder="Descrizione Corso" value={nuovoCorso.descrizione} onChange={handleChange} required
            />
            <input name="img" placeholder="URL immagine"value={nuovoCorso.img}onChange={handleChange} 
            />
            <button type="submit">Salva Corso</button>
            <button onClick={onClose}>Annulla</button>
        </form>
    </div>
  );
}
export default CardEditor;
