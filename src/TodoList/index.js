import React from "react";
import './TodoList.css'

function TodoList(props) {
  return(
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {props.searchedTodos.map(props.render || props.children)}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      <ul className="TodoList-List">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList }