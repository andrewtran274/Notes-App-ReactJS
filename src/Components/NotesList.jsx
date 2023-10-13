import React from "react";
import Note from "./Note";
import "./NotesList.css";
import CreateNewNote from "./CreateNewNote";
import { useNotesAppContext } from "./context/NotesAppContext";

const NotesList = () => {
  const { notesList, searchInput } = useNotesAppContext();

  const dataNote = notesList.filter((note) =>
    note.content.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="notes-list">
      {dataNote.map((noteData) => (
        <Note key={noteData.id} noteData={noteData} />
      ))}
      <CreateNewNote />
    </div>
  );
};

export default NotesList;
