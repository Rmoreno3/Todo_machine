import React from "react";

function TodoItem(props) {
  return(
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <p>{props.status}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };