import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {
  const addTask = (msg) => {
    alert(msg)
  };


  return(
    <div className="buttonContent">
      <button 
        className="CreateTodoButton"
        onClick={() => addTask('ocurrio un evento')}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };