import React, { createContext, useState } from 'react';

// Crea el contexto de notas
export const NoteContext = createContext();

// Componente proveedor de contexto
export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  );
};
