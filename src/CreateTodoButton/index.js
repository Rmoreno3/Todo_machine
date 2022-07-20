import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState)
  };


  return(
    <div className="buttonContent">
      <button 
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };