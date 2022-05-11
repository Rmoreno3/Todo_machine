import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import {  TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
// import './App.css';

const todos = [
  { id: 0, text:'Hacer ejercicio', completed: false },
  { id: 1, text:'Tomar agua', completed: false },
  { id: 2, text:'Comer merienda', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} status={todo.completed} /> 
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
