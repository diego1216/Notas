import React from 'react';
import './Note.css';

const Note = ({ note, onEdit, onDelete }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm("¿Quieres eliminar esta nota?");
    if (confirmDelete) {
      onDelete(note.id); // Elimina la nota si el usuario confirma
    }
  };

  return (
    <div className="note-item">
      <h4>{note.title}</h4>
      <p><strong>Asunto:</strong> {note.subject}</p>
      <p>{note.content}</p>
      <div className="note-buttons">
        <button className="edit-button" onClick={() => onEdit(note)}>Editar</button>
        <button className="delete-button" onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default Note;
