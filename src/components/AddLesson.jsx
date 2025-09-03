import { useState } from "react";
function AddLesson({onSave})
{
    const [nuovaLezione, setNuovalezione] = useState({
    titolo: "",
    video:""
  });
  function handleSave(e){
    e.preventDefault();
    onSave(nuovaLezione); // passa i dati al genitore
  };
  function handleChange(e)
  {
    const{name,value} = e.target;
    setNuovalezione({...nuovaLezione,[name]:value});
  }
return( 
    <div className="inline-form">
        <form onSubmit={handleSave}>
            <input name="titolo" type="text" placeholder="Nome Lezione"value={nuovaLezione.titolo}onChange={handleChange} required
            />
            <input name="video" type="url"  placeholder="Descrizione Corso" value={nuovaLezione.video}onChange={handleChange} required
            />
            <button>Crea Lezione</button>
        </form>
    </div>
); 
}export default AddLesson