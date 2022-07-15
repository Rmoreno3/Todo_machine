import React from 'react';
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <>
      <FontAwesomeIcon icon={faClipboardList} className="list-icon"/>
      <p className="empty-parrafo">No tienes tareas por hacer, ¡Crea una!</p>
    </>
  )
};

export { EmptyTodos };