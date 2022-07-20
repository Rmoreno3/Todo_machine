import React from "react";
import './TodoList.css'

function TodoList(props) {
  return(
    <section className="TodoList">


      <ul className="TodoList-List">
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
        {props.searchedTodos.map(props.render || props.children)}
        {props.error && props.onError()}
      </ul>
    </section>
  );
}

export { TodoList }