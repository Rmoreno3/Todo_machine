import React from "react";
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos, loading }) { 
  return(
    <div className={`todoCounter-Container ${!!loading && "todoCounter--loading"}`}>
      {/* <FontAwesomeIcon icon={faListCheck} id="list"/> */}
      {!totalTodos ? <p>Lista de Tareas</p> : 
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2> }
    </div>
  );
}

export  { TodoCounter };