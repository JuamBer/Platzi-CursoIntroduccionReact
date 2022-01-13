import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        msg
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => !!todo.completed).length;

    let searchedTodos = [];

    if (!(searchValue.length >= 1)) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => (
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
        ));
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
        <TodoContext.Provider value={{
            msg,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}> 
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };