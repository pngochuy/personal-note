import React from "react";

function NoteList({ noteList, setNoteList }) {
  const handleDeleteNote = (index) => {
    const newNoteList = noteList.filter(
      (note, indexNote) => indexNote !== index
    );
    // tạo ra array NoteList mới không chứa phần tử cần xóa có ID là index, rồi cật nhập lại setNoteList
    setNoteList(newNoteList);
  };

  const handleMarkNote = (index) => {
    const newNoteList = noteList.map((note, indexNote) => {
      let c = note.count;
      // console.log(note);
      if (indexNote === index) {
        ++c;
        // c = 1: KO ĐƯỢC ĐÁNH DẤU SAO
        // c = 2: ĐƯỢC ĐÁNH DẤU SAO
        // console.log(c);
        if (c % 2 === 0) {
          return {
            ...note,
            isStarted: true,
            count: c,
          };
        } else {
          return {
            ...note,
            isStarted: false,
            count: 1,
          };
        }
      } else {
        return {
          ...note,
          count: c,
        };
      }
    });
    // console.log(newNoteList);
    setNoteList(newNoteList);
  };

  return (
    <>
      <div className="note__list">
        {noteList.map((note, indexNote) => {
          if (note.isStarted === true) {
            return (
              <div className="note" key={indexNote}>
                <div className="note-detail-true">
                  <h2 className="note-detail-title">{note.title}</h2>
                  <p className="note-detail-content">{note.content}</p>
                </div>
                <div className="note-status">
                  <button
                    className="delete-note"
                    onClick={() => handleDeleteNote(indexNote)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="mark-note"
                    onClick={() => handleMarkNote(indexNote)}
                  >
                    <i class="fa-solid fa-star"></i>
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="note" key={indexNote}>
                <div className="note-detail-false">
                  <h2 className="note-detail-title">{note.title}</h2>
                  <p className="note-detail-content">{note.content}</p>
                </div>
                <div className="note-status">
                  <button
                    className="delete-note"
                    onClick={() => handleDeleteNote(indexNote)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="mark-note"
                    onClick={() => handleMarkNote(indexNote)}
                  >
                    <i class="fa-solid fa-star"></i>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default NoteList;
