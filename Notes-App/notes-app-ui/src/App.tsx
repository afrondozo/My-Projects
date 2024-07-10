import './App.css';
import { useState } from 'react';


const App = () => {
  const [notes, setNotes] = useState([
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
  return(
    <div className="app-container">
      <form className="note-form">
        <input
          placeholder="title"
          required
        ></input>
        <textarea
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