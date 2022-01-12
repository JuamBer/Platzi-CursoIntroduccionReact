import React from "react";
import { AppUI } from './appUI';
import './app.css';

const defaultTodos = [
  {id:0, text: `Ordenar Libros`, completed: false },
  {id:1, text: 'Tomar el curso', completed: false },
  {id:2, text: 'Llorar con la llorona', completed: false },
  {id:3, text: 'Cortar Cebolla', completed: true }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  let searchedTodos = [];

  if(!(searchValue.length >= 1)){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter((todo) => (
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    ));
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
