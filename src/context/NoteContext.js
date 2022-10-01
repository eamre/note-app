import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const NoteContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [idKeep, setidKeep] = useState(false);
  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("mynotes")) || [
      {
        id: nanoid(),
        text: "this my first note",
        date: "13/8/23",
      },
      {
        id: nanoid(),
        text: "this my second note",
        date: "1/8/23",
      },
      {
        id: nanoid(),
        text: "this my third note",
        date: "3/8/23",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("mynotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      check: false,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const checkNote = (id) => {
    const newNotes = notes.map((n) => (n.id === id ? { ...n, check: !n.check } : n));
    console.log(newNotes);
    setNotes(newNotes)
  };

  const updateNote = (id,text) => {
    // const newNote = {
    //   id: id,
    //   text: text,
    // };
    // const newNotes = [...notes, newNote];
    const newNotes = notes.map((n) => (n.id === id ? { ...n, text: text } : n));
    setNotes(newNotes);
    console.log(id);

  };

  return (
    <NoteContext.Provider
      value={{
         notes, setNotes, addNote, deleteNote, checkNote,
         isEditing, setIsEditing,currentTodo, setCurrentTodo,updateNote,
         idKeep, setidKeep }}
    >
      {children}
    </NoteContext.Provider>
  );
};
