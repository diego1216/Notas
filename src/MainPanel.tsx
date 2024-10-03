import React, { useContext } from 'react';
import NoteContext from './NoteContext';
import './MainPanel.css';

const MainPanel: React.FC = () => {
  const { state } = useContext(NoteContext); // Obtener el estado desde el contexto

  return (
    <div className="main-panel">
      <h2>Lista de Notas</h2>
      {/* Mostrar las notas en la lista */}
      <div className="note-list">
        {state.notes.length === 0 ? (
          <p>No hay notas aún. ¡Agrega una nueva nota!</p>
        ) : (
          state.notes.map((note) => (
            <div key={note.id} className="note-item">
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MainPanel;
