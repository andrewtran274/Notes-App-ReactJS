import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchNotes.css";

const SearchNotes = () => {
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
      />
    </div>
  );
};

export default SearchNotes;