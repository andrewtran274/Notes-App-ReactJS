import { createContext, useContext, useState } from "react";
import { NotesData, colors } from "../data/notes";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const NotesAppContext = createContext({});

export function useNotesAppContext() {
  return useContext(NotesAppContext);
}

export function NotesAppContextProvider({ children }) {
  const [notesList, setNotesList] = useLocalStorage("note-list", NotesData);
  const [searchInput, setSearchInput] = useState("");
  const [isDark, setIsDark] = useLocalStorage("dark-mode", false);

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
