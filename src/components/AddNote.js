import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export const AddNote = () => {
  const {addNote,isEditing,setIsEditing,currentTodo,setCurrentTodo,updateNote,idKeep}=useContext(NoteContext);
 
  const [noteText,setNoteText]=useState("");

  const characterLimit=250;

  const handleChange=(e)=>{
    if(characterLimit-e.target.value.length>=0)
    setNoteText(e.target.value);
  }

  const handleSaveClick=()=>{
    if(noteText.trim().length>0)
    addNote(noteText)
    setNoteText("")
  }
  const handleUpdateClick=()=>{
    updateNote(idKeep,currentTodo)
    setIsEditing(false)
    console.log("idKeep");
  }

  function handleEditInputChange(e) {
    setCurrentTodo(e.target.value);
    console.log(currentTodo);
  }

  const handleUpdateCancel =()=>{
    setIsEditing(false)
  }
  return (<div>
    {isEditing?(
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note"
        value={currentTodo}
        onChange={handleEditInputChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit-currentTodo.length} remaining</small>
        <div>
          <button className="save" style={{marginRight:'5px'}} onClick={handleUpdateCancel}>Cancel</button>
          <button className="save" onClick={handleUpdateClick}>Update</button>
        </div>
      </div>
  </div>
  )
  :
  (
  <div className="note new">
    <textarea
      cols="10"
      rows="8"
      placeholder="Type to add note"
      value={noteText}
      onChange={handleChange}
    ></textarea>
    <div className="note-footer">
      <small>{characterLimit-noteText.length} remaining</small>
      <button className="save" onClick={handleSaveClick}>Save</button>
    </div>
</div>
)}
</div>
  );
};
