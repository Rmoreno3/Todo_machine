import React from "react";
import './Styles/TodoList.css'

function TodoList(props) {
  return(
    <section className="TodoList">
      <ul className="TodoList-List">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList }