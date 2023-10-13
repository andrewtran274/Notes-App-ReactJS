import React, { useState } from "react";
import "./App.css";
import HeaderApp from "./Components/HeaderApp";
import SearchNotes from "./Components/SearchNotes";
import NotesList from "./Components/NotesList";
import { useNotesAppContext } from "./Components/context/NotesAppContext";

const App = () => {
  const { isDark } = useNotesAppContext();
  console.log(isDark);
  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <div className="container">
        <HeaderApp></HeaderApp>
        <SearchNotes></SearchNotes>
        <NotesList></NotesList>
      </div>
    </div>
  );
};

export default App;
