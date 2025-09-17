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

  function handleSave(e){
    e.preventDefault();
    if (initialValues) {
       onUpdate(nuovoCorso); // se  modifico ->  chiama la funzione di update
    } else{
       onSave(nuovoCorso);   // se aggiungo  → chiama la funzione di save
    }
  };
 
  return (
    <div className="inline-form">
        <form method="post" onSubmit={handleSave}>
            <input name="titolo" placeholder="Nome Corso"value={nuovoCorso.titolo} onChange={handleChange} required
            />
            <input name="descrizione" placeholder="Descrizione Corso" value={nuovoCorso.descrizione} onChange={handleChange} required
            />
            <input name="img" placeholder="URL immagine"value={nuovoCorso.img}onChange={handleChange} 
            />
            <button type="submit"> {initialValues ? "Modifica Corso" : "Aggiungi Corso"}</button>
            <button onClick={onClose}>Annulla</button>
        </form>
    </div>
  );
}
export default CardEditor;
