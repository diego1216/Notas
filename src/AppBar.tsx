mport React from 'react';

interface AppBarProps {
  openModal: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ openModal }) => {
  return (
    <header className="app-bar">
      <h1>Mis Notas</h1>
      {/* Botón de agregar nota */}
      <button className="add-note-button" onClick={openModal}>
        Agregar Nota
      </button>
    </header>
  );
};

export default AppBar;