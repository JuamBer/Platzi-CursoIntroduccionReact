import React from "react";
import { TodoCounter } from "./Todo/TodoCounter";
import { TodoList } from "./Todo/TodoList";
import { TodoItem } from "./Todo/TodoItem";
import { TodoSearch } from "./Todo/TodoSearch"; 
import { CreateTodoButton } from "./Todo/CreateTodoButton"; 
import '../css/App.css';

const todos = [
  {id:0, text: `Ordenar Libros`, completed: false },
  {id:1, text: 'Tomar el curso', completed: false },
  {id:2, text: 'Llorar con la llorona', completed: false },
  {id:3, text: 'Cortar Cebolla', completed: true }
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
              id={todo.id} 
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
