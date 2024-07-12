import './App.css';
import React, { useState } from 'react';

type Note = {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [notes, setNotes] = useState<
    Note[]
  >([
    {
      id: 1,
      title: "note title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "note title 1",
      content: "content 1",
    },
    {
      id: 3,
      title: "note title 1",
      content: "content 1",
    }
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
    console.log("title: ", title)
    console.log("content: ", content)
  };

  return(
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={(event) => handleSubmit(event)}
        >
        <input
          value={title}
          onChange={(event) => 
            setTitle(event.target.value)
          }
          placeholder="title"
          required
        ></input>
        <textarea
          value={content}
          onChange={(event) => 
            setContent(event.target.value)
          }
          placeholder="Content"
          rows={10}
          required
        ></textarea>
        <button type="submit"> Add Note </button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
          <div className="notes-header">
            <button> X </button>
          </div>
          <h2> {note.title} </h2>
          <p> {note.content} </p>
        </div>
        ))}
      </div>
    </div>
    );
};

export default App;