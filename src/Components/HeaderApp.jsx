import React from "react";
import "./HeaderApp.css";

const HeaderApp = ({ handlerDarkMode, isDarkMode }) => {
  return (
    <div className={`header-app ${isDarkMode ? "dark" : ""}`}>
      <h1>
        <span>Notes</span> App
      </h1>
      <button
        className="btn"
        onClick={() => handlerDarkMode((isDark) => !isDark)}
      >
        {`${isDarkMode ? "Light" : "Dark"}`} Mode
      </button>
    </div>
  );
};

export default HeaderApp;
