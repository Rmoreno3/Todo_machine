import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext)
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