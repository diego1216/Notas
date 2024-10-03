import React, { useState, useContext } from 'react';
import { NoteContext } from './NoteContext';
import AddNoteModal from './AddNoteModal';
import Note from './Note';
import './App.css';

const App = () => {
  const { notes, addNote, deleteNote, editNote } = useContext(NoteContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(true);
    setNoteToEdit(null); // Reinicia para agregar una nueva nota
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
    setModalOpen(true); // Abre el modal en modo de edición
  };

  const handleGuardarNota = (note) => {
    if (noteToEdit) {
      editNote(note);
    } else {
      addNote(note);
    }
    setModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Aplicación de Notas</h1>
        <button className="add-note-button" onClick={handleOpenModal}>Agregar Nota</button>
      </div>
      {notes.length === 0 ? (
        <p>No hay notas disponibles. Agrega una nota para empezar.</p>
      ) : (
        notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onEdit={handleEditNote}
            onDelete={deleteNote}
          />
        ))
      )}
      {isModalOpen && (
        <AddNoteModal
          onGuardarNota={handleGuardarNota}
          onCerrar={() => setModalOpen(false)}
          noteToEdit={noteToEdit} // Pasa la nota a editar
        />
      )}
    </div>
  );
};

export default App;
