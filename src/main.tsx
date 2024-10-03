import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NoteProvider } from './NoteContext'; // Importar el proveedor

ReactDOM.render(
  <NoteProvider>
    <App />
  </NoteProvider>,
  document.getElementById('root')
);
