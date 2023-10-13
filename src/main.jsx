import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotesAppContextProvider } from "./Components/context/NotesAppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesAppContextProvider>
      <App />
    </NotesAppContextProvider>
  </React.StrictMode>
);
