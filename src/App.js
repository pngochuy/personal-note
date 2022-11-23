import "./assests/style.css";
import Input from "./components/Input.js";
import NoteList from "./components/NoteList.js";
import { useEffect, useState } from "react";
function App() {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("noteList")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);
  // window.localStorage.clear();
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="note__control">
            <h1 className="note-text">NOTE</h1>
            <Input
              setNoteList={(newNote) => {
                setNoteList([...noteList, newNote]);
              }}
              noteList={noteList}
            ></Input>
          </div>
          <NoteList noteList={noteList} setNoteList={setNoteList}></NoteList>
        </div>
      </div>
      <div className="author">
        Made with <i class="fa-solid fa-heart heart-icon"></i> By{" "}
        <a href="https://github.com/pngochuy">Seal</a>
      </div>
    </>
  );
}

export default App;
