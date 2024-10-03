import React from 'react';
import './Note.css';

interface NoteProps {
  title: string;
  asunto: string;
  content: string;
  onDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ title, asunto, content, onDelete }) => {
  return (
    <div className="note-card">
      <h3 className="note-title">{title}</h3>
      <h4 className="note-asunto">{asunto}</h4>
      <p className="note-content">{content}</p>
      <button className="delete-button" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
};

export default Note;
