import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useContext } from "react";
import { NoteContext } from "./context/NoteContext";

function App() {
  const {notes, setNotes}=useContext(NoteContext);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
}

export default App;
// useEffect(()=> {
  //   const savedNotes=JSON.parse(localStorage.getItem('mynotes'));
  //   savedNotes&&setNotes(savedNotes)},[])