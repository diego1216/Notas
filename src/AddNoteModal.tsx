import React, { useState, useEffect } from 'react';
import './AddNoteModal.css';

const AddNoteModal = ({ onGuardarNota, onCerrar, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setSubject(noteToEdit.subject);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = () => {
    const newNote = { id: noteToEdit ? noteToEdit.id : Date.now(), title, subject, content };
    onGuardarNota(newNote);
    onCerrar();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">{noteToEdit ? 'Editar Nota' : 'Crear Nota'}</h2>
        <input
          type="text"
          className="modal-input"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="modal-input"
          placeholder="Asunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="modal-textarea"
          placeholder="Contenido de la nota..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="modal-button save-button" onClick={handleSubmit}>
            {noteToEdit ? 'Actualizar' : 'Guardar'}
          </button>
          <button className="modal-button cancel-button" onClick={onCerrar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
