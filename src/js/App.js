import React from "react";
import { TodoCounter } from "./Todo/TodoCounter";
import { TodoList } from "./Todo/TodoList";
import { TodoItem } from "./Todo/TodoItem";
import { TodoSearch } from "./Todo/TodoSearch"; 
import { CreateTodoButton } from "./Todo/CreateTodoButton"; 
import '../css/App.css';

const todos = [
  {
    text: `For this code to work well the starting color needs to be black. If your icon set isnt black you can prepend
    to your filter property which will first turn the icon set to black.
    `, completed: false },
  { text: 'Tomar el curso', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Cortar Cebolla', completed: true }
];

function App() {
  return (
    <div className="main">
      <div className="container">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {
            todos.map(todo=>(
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              />
            ))
          }
        </TodoList>
        <CreateTodoButton/>

      </div>
    </div>
  );
}

export default App;
