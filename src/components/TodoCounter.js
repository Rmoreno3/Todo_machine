import React from "react";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles/TodoCounter.css'

function TodoCounter() {
  return(
    <div className="todoCounter-Container">
      <FontAwesomeIcon icon={faListCheck} id="list"/>
      <h2 className="TodoCounter">Has completado 2 de 3 TODOS</h2>
    </div>
  );
}

export  { TodoCounter };