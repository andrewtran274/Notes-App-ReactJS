import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Note.css";

const Note = ({ noteData, handleDeleteNote }) => {
  const { id, content, date, color } = noteData;
  return (
    <div className="note" style={{ background: `${color}` }}>
      <span className="content">{content}</span>
      <div className="infoNote">
        <div className="date">{`${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()}`}</div>
        <div className="delete" onClick={() => handleDeleteNote(id)}>
          <MdDeleteForever className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Note;
