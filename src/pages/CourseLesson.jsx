import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddLesson from '../components/AddLesson';
import './CurseLesson.css'
import NavBar from "../components/Navbar"
import Button from 'react-bootstrap/Button';


function CourseLesson()
{
    const { corsoId } = useParams(); // prendi l'id dal path
    const [lezioni, setLezioni] = useState([]);// Stato locale delle lezioni
    const [editingLesson,setEditingLesson] = useState();
     const[corso,setCorso] = useState([]); //per avere info del corso
    const [showForm,setShowForm] = useState(false); // serve per visualizzare o meno il pulsante

    const docenteid = JSON.parse(sessionStorage.getItem("user"))

    //Fa vedere a schermo tutte le lezioni del prof che ha caricato
    useEffect(()=>{
        fetch(import.meta.env.VITE_API_URL+"/lezioni/"+corsoId,
        {
            method:"GET",
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        })
        .then((res)=>res.json())
        .then((data)=>setLezioni(data));
    },[]);
    //serve per prendere le informazioni dal corso
    useEffect(()=>{
        fetch(import.meta.env.VITE_API_URL+"/corsi/"+corsoId,{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`,
            },
        }).then((res)=> res.json())
        .then((corso)=>setCorso(corso));
    },[])

    const handleAddLesson = (nuovaLezione) => 
    {
        fetch(import.meta.env.VITE_API_URL+"/lezioni"+"/add/"+corsoId,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${sessionStorage.getItem("token")}`, 
            },
            body:JSON.stringify(nuovaLezione)
        }).then((res)=>res.json())
        .then((nuovalezione)=>{setLezioni([...lezioni,nuovalezione])})
    };


   const handleUpdateLesson = (lezioneAggiornata) => {
    fetch(import.meta.env.VITE_API_URL+"/lezioni/"+corsoId+"/"+lezioneAggiornata._id,{
        method:"PUT",
        headers:{
            "Content-Type" : "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        },body: JSON.stringify(lezioneAggiornata)
    }).then((res)=>res.json())
    .then(lezioneDalServer => {
      setLezioni(prevLezioni => prevLezioni.map(l => l._id === lezioneDalServer._id ? lezioneDalServer : l )
        );
        }) 
    };

    const handleDeleteLesson = (lezioneEliminata)=>{

        fetch(import.meta.env.VITE_API_URL+"/lezioni/"+corsoId+"/"+lezioneEliminata._id,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        }).then((res)=>res.json())
        .then(() => { setLezioni(prevLezioni => prevLezioni.filter(l => l._id !== lezioneEliminata._id) );  })
        .catch(err => {
        console.error(err);
        });
    }
      
    return(
        <>
        <NavBar/>
        <div className="container-table">
         <h1>Corso di {corso.titolo}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Numero Lezione</th>
                            <th>Titolo Lezione</th>
                            <th>Link Lezione</th>
                        </tr>
                    </thead>
                    <tbody>
                    {lezioni.length > 0 ?
                     (
                        lezioni.map((l,index) =>(
                        <tr key={l._id}>
                        <td>{index + 1}</td>
                        <td> {l.titolo}</td>
                        <td> {l.video}</td>
                        <td>
                            <Button variant="warning" className="me-2" onClick={()=>{setShowForm(!showForm);setEditingLesson(l)}}>Modifica</Button>
                            <Button variant="danger" className="me-2" onClick={()=>{handleDeleteLesson(l)}}>Elimina</Button>
                        </td>
                        </tr>
                        )) 
                     ) : <tr>
                        <td colSpan="3">NESSUNA LEZIONE TROVATA</td>
                        </tr>
                    }
                    </tbody>
                </table>
                    <div className="button-container">
                    <button onClick={() => setShowForm(!showForm)}>AGGIUNGI LEZIONE</button>
                    </div>
                {showForm && <AddLesson onSave={handleAddLesson} lezione={editingLesson} onUpdate={handleUpdateLesson} />}
        </div>
        </>
    );
}export default CourseLesson