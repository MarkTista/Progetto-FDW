import React, { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import LessonList from "../components/LessonList";
import Navbar from "../components/Navbar"
import "./StudentLesson.css";
import { useParams } from "react-router-dom";
function StudentLesson() {

  const { studenteId,corsoId } = useParams() ; //mi prendo l'id
  const [currentLesson, setCurrentLesson] = useState(); //hook per seleziona la lezione corrente
  const [lezioni, setLezioni] = useState([]); // hook per seleziona tutte le lezioni

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL+"/lezioni/"+corsoId+"/"+studenteId,{
      method:"GET",
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }
    }).then((res)=>res.json())
    .then((lezioni)=>{setLezioni(lezioni); setCurrentLesson(lezioni[0])})
  }, []);
  return (
    <>
    <Navbar/>
    <div className="student-lesson">
      <h2>{currentLesson ? "In questa lezione si parla di :"+currentLesson.titolo : "Il docente le deve ancora caricare..."}</h2>
      {currentLesson &&(<VideoPlayer videoUrl={currentLesson.video} titolo={currentLesson.titolo} />  )}
      {lezioni.length > 0 && (<LessonList  lezioni={lezioni}  currentLesson={currentLesson}  onSelect={setCurrentLesson} />)}
    </div>
    </>
  );
} export default StudentLesson;
