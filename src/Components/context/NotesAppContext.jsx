import { createContext, useContext, useState } from "react";
import { notesData, colors } from "../data/notes";
import { v4 as uuidv4 } from "uuid";

const NotesAppContext = createContext({});

export function useNotesAppContext() {
  return useContext(NotesAppContext);
}

export function NotesAppContextProvider({ children }) {
  const [notesList, setNotesList] = useState(notesData);
  const [searchInput, setSearchInput] = useState("");
  const [isDark, setIsDark] = useState(false);

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

  return (
    <NotesAppContext.Provider
      value={{
        isDark,
        setIsDark,
        handleAddNote,
        handleDeleteNote,
        notesList,
        colors,
        setSearchInput,
        searchInput,
      }}
    >
      {children}
    </NotesAppContext.Provider>
  );
}
