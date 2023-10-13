import React from "react";
import Note from "./Note";
import "./NotesList.css";
import CreateNewNote from "./CreateNewNote";

const NotesList = ({
  notesListData,
  handleDeleteNote,
  colors,
  handleAddNote,
}) => {
  console.log(notesListData);
  return (
    <div className="notes-list">
      {notesListData.map((note) => (
        <Note
          key={note.id}
          noteData={note}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <CreateNewNote colors={colors} handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
