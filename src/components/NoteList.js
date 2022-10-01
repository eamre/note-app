import React, { useContext } from "react";
import { AddNote } from "./AddNote";
import Note from "./Note";

const NoteList = ({notes}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          check={note.check}
          date={note.date}
          
          //clickCheck={()=>checkNote(note.id)}
        />
      ))}
      <AddNote/>
    </div>
  );
};

export default NoteList;
