import React, { useContext } from "react";
import { useState } from "react";
import {MdDeleteForever} from "react-icons/md"
import {AiFillCheckCircle} from "react-icons/ai"
import {BsPencilFill} from "react-icons/bs"
import { NoteContext } from "../context/NoteContext";

const Note = ({id, text, date, check}) => {
  
  const {deleteNote,checkNote,notes,setIsEditing,currentTodo, setCurrentTodo,idKeep, setidKeep}=useContext(NoteContext);

  const clickEdit=(id)=>{
    setIsEditing(true)
    notes.find(n=>n.id===id?setCurrentTodo(n.text):"")
    setidKeep(id)
    console.log(idKeep);
    console.log(currentTodo);
  }

  return (
    <div className="note" >
      <span className={`${check && "check"}`}>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div>
          <AiFillCheckCircle onClick={()=>checkNote(id)} 
          className="delete-icon" size="1.3rem"/>
          <BsPencilFill  onClick={()=>clickEdit(id)} 
          className="delete-icon" size="1.3rem" style={{marginLeft:'5px', marginRight:'5px'}} />
          <MdDeleteForever onClick={()=>deleteNote(id)} 
          className="delete-icon" size="1.3rem"/>         
        </div>
      </div>
    </div>
  );
};

export default Note;
