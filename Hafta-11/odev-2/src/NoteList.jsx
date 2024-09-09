import React from 'react';

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div 
          key={index} 
          className="note" 
          style={{ backgroundColor: note.color }}
        >
          <button 
            className="delete-button" 
            onClick={() => onDelete(index)}
          >
            &times;
          </button>
          {note.text}
        </div>
      ))}
    </div>
  );
}

export default NoteList;