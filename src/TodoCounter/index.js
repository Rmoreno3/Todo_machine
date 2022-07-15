import React from "react";
import { TodoContext } from "../TodoContext";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TodoCounter.css'

function TodoCounter() {
  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext);

  return(
    <div className="todoCounter-Container">
      <FontAwesomeIcon icon={faListCheck} id="list"/>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
    </div>
  );
}

export  { TodoCounter };