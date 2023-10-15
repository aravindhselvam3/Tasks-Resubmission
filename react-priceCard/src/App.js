
import React from 'react';
import './card.css';

function Cards({ details }) {
  return (
    <div className="card">
      <h1>{details.content}</h1>
      <ul>
        {details.list.map(ls => (
          <h4>{ls.important ? "✓" : "〤"} {ls.text}</h4>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

function App({ notes }) {
  return (
    <div className="card-container">
      {notes.map(value => (
        <Cards key={value.id} details={value} />
      ))}
    </div>
  );
}

export default App;
