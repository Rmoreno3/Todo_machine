import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles/TodoItem.css'

function TodoItem(props) {
  return(
    <li className="TodoItem">
      <input type="checkbox" id="check"/>
      <p id="text">{props.text}</p>
      <p>{props.status}</p>
      <FontAwesomeIcon icon={faTrash} id="trash"/>
    </li>
  );
}

export { TodoItem };