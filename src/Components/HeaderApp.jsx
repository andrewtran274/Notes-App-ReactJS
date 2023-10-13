import React from "react";
import "./styles/HeaderApp.css";
import { useNotesAppContext } from "./context/NotesAppContext";

const HeaderApp = () => {
  const { isDark, setIsDark } = useNotesAppContext();
  return (
    <div className={`header-app ${isDark ? "dark" : ""}`}>
      <h1>
        <span>Notes</span> App
      </h1>
      <button className="btn" onClick={() => setIsDark((isDark) => !isDark)}>
        {`${isDark ? "Light" : "Dark"}`} Mode
      </button>
    </div>
  );
};

export default HeaderApp;
