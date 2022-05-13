import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles/TodoItem.css'

function TodoItem(props) {
  // const onComplete = () => {
  //   alert(`tarea completada ${props.text}`)
  // }

  // const onDelete = () => {
  //   alert(`eliminaste la tarea ${props.text}`)
  // }

  return(
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
      onClick={props.onComplete}>
        √
      </span>
      <p className={`text ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <FontAwesomeIcon icon={faTrash} className='trash' onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };