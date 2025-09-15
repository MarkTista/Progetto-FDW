import React from "react";
import "../pages/StudentLesson.css"
 function LessonList({ lezioni, currentLesson, onSelect }) {
  return (
    <div className="lesson-list">
      <h3>Lezioni disponibili</h3>
      <ul>
        {lezioni.map((lezione) => (
          <li
            key={lezione.id}
            className={currentLesson?.id === lezione.id ? "active" : ""}
            onClick={() => onSelect(lezione)}
            >
            {console.log(lezione)}
            {lezione.titolo}
          </li>
        ))}
      </ul>
    </div>
  );
} export default LessonList
