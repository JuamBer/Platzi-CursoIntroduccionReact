import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch"; 
import { CreateTodoButton } from "./CreateTodoButton"; 
//import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el curso', completed: false },
  { text: 'Llorar con la llorona', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo=>(
            <TodoItem key={todo.text} text={todo.text}/>
          ))
        }
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
