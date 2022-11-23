import React from "react";
import "../assests/style.css";
import { useState, useRef } from "react";
function InputTitle({ setNoteList, noteList }) {
  const [newNote, setNewNote] = useState({
    count: 1,
    title: "",
    content: "",
    isStarted: false,
  });
  const inputRefTitle = useRef();
  const inputRefContent = useRef();
  const handleAddNote = () => {
    if (newNote.title !== "" && newNote.content !== "") {
      setNoteList(newNote);
      setNewNote({
        ...newNote,
        title: "",
        content: "",
      });
      inputRefTitle.current.focus();
      // inputRefContent.current.focus();
    } else {
      alert("You enter nothing!");
    }
  };

  const handlePressEnter = (e) => {
    if (e.code === "Enter") {
      handleAddNote();
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="// Write a title here"
          className="input-title"
          onChange={(e) => {
            setNewNote({
              ...newNote,
              title: e.target.value,
            });
          }}
          ref={inputRefTitle}
          onKeyDown={(e) => handlePressEnter(e)}
          value={newNote.title}
        ></input>
      </div>
      <div className="input-container">
        <textarea
          type="text"
          placeholder="// Write content here"
          className="input-content"
          onChange={(e) => {
            setNewNote({
              ...newNote,
              content: e.target.value,
            });
          }}
          ref={inputRefContent}
          onKeyDown={(e) => handlePressEnter(e)}
          value={newNote.content}
        ></textarea>
      </div>
      <div className="button-container">
        <button class="button" onClick={() => handleAddNote()}>
          Add
        </button>
      </div>
    </>
  );
}

export default InputTitle;
