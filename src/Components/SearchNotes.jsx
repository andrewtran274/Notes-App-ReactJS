import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchNotes.css";
import { useNotesAppContext } from "./context/NotesAppContext";

const SearchNotes = () => {
  const { setSearchInput } = useNotesAppContext();
  return (
    <div className="search-notes">
      <label htmlFor="search">
        <FiSearch className="search-icon" />
      </label>
      <input
        type="text"
        className="search"
        id="search"
        name="search"
        placeholder="Enter your name Notes..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchNotes;
