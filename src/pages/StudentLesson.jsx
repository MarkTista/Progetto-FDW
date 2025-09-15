import React, { useState, useEffect } from "react";
import { corsi } from "../User";
import VideoPlayer from "../components/VideoPlayer";
import LessonList from "../components/LessonList";
import Navbar from "../components/Navbar"
import "./StudentLesson.css";

function StudentLesson() {
  const [currentLesson, setCurrentLesson] = useState(); //hook per seleziona la lezione corrente
  const [lezioni, setLezioni] = useState([]); // hook per seleziona tutte le lezioni


  useEffect(() => {
    const corsoSelezionato = corsi.find((c) => c.id === 3);
    if (corsoSelezionato && corsoSelezionato.lezioni) {
      setLezioni(corsoSelezionato.lezioni);
      setCurrentLesson(corsoSelezionato.lezioni[0]);
    }
  }, []);
  /* La condizione del'if viene rispettata se true && true cioè se il corso ha le lezioni */

  return (
    <>
    <Navbar/>
    <div className="student-lesson">
      <h2>{currentLesson ? "In questa lezione si parla di :"+currentLesson.titolo : "Il docente le deve ancora caricare..."}</h2>
      {currentLesson &&(<VideoPlayer videoUrl={currentLesson.video} titolo={currentLesson.titolo} />  )}
      <LessonList
        lezioni={lezioni}
        currentLesson={currentLesson}
        onSelect={setCurrentLesson} />
    </div>
    </>
  );
} export default StudentLesson;
