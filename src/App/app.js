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
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
