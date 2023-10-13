import React, { useState } from "react";
import "./CreateNewNote.css";
import { useNotesAppContext } from "./context/NotesAppContext";

const CreateNewNote = () => {
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");
  const { handleAddNote, colors } = useNotesAppContext();

  const handleColorChange = (e, color) => {
    setColor(color);
    if (document.querySelector(".colors .active") !== null) {
      document.querySelector(".colors .active").classList.remove("active");
    }
    e.target.classList.add("active");
  };

  const handleCheckAddNote = () => {
    if (content === "") {
      alert("Nội dung của Note trống !!!");
    } else if (color === "") {
      alert("Bạn chưa chọn màu cho Note !!!");
    } else {
      handleAddNote({ content, color });
      setContent("");
    }
  };
  return (
    <div className="note">
      <textarea
        value={content}
        name="content"
        id="content"
        cols="30"
        rows="10"
        placeholder="Writing content new note..."
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="infoNewNote">
        <div className="colors">
          {colors.map((color) => (
            <div
              onClick={(e) => handleColorChange(e, color)}
              className="circle"
              style={{ background: `${color}` }}
              id="0"
              key={color}
            ></div>
          ))}
        </div>
        <button
          className="btn"
          onClick={() => handleCheckAddNote({ content, color })}
        >
          ADD NOTE
        </button>
      </div>
    </div>
  );
};

export default CreateNewNote;
