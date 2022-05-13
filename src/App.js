import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import {  TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
// import './App.css';

const todos = [
  { text:'Hacer ejercicio', completed: true },
  { text:'Tomar agua', completed: false },
  { text:'Comer merienda', completed: false },
  { text:'Comer almuerzo', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} /> 
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
