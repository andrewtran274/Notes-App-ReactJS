import React, { useState } from "react";
import "./App.css";
import HeaderApp from "./Components/HeaderApp";
import SearchNotes from "./Components/SearchNotes";
import NotesList from "./Components/NotesList";
import { v4 as uuidv4 } from "uuid";

const colors = ["#00ff0d", "#e45c1c", "#1cace4", "yellow"];

const notesData = [
  {
    id: uuidv4(),
    content: "Learn TypeScript and NextJS",
    date: new Date(),
    color: "#e45c1c",
  },
  {
    id: uuidv4(),
    content: "Learn ASP.NET core MVC and ASP.NET core Web API",
    date: new Date(),
    color: "yellow",
  },
  {
    id: uuidv4(),
    content: "Learn Csharp: Entity Framework and Build project react js",
    date: new Date(),
    color: "#1cace4",
  },
  {
    id: uuidv4(),
    content: "Deadline homework English EOP",
    date: new Date(),
    color: "#00ff0d",
  },
];

const App = () => {
  const [notesList, setNotesList] = useState(notesData);

  const handleAddNote = (noteData) => {
    const newNoteData = {
      id: uuidv4(),
      content: noteData.content,
      date: new Date(),
      color: noteData.color,
    };
    setNotesList([...notesList, newNoteData]);
  };

  const handleDeleteNote = (idNote) => {
    const newNotesListData = notesList.filter((note) => note.id !== idNote);
    setNotesList(newNotesListData);
  };

  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <div className="container">
        <HeaderApp handlerDarkMode={setIsDark} isDarkMode={isDark}></HeaderApp>
        <SearchNotes></SearchNotes>
        <NotesList
          notesListData={notesList}
          handleDeleteNote={handleDeleteNote}
          colors={colors}
          handleAddNote={handleAddNote}
        ></NotesList>
      </div>
    </div>
  );
};

export default App;
