import React from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles/CreateTodoButton.css'

function CreateTodoButton() {
  return(
    <div className="buttonContent">
      <button className="buttonAdd" >
        <FontAwesomeIcon icon={faCirclePlus} id="add"/>
      </button>
    </div>
  );
}

export { CreateTodoButton };