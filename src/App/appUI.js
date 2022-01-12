import React from 'react';
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoSearch } from "./TodoSearch/TodoSearch"; 
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton"; 

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <div className="main">
        <div className="container">
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
            {
                searchedTodos.map(todo => (
                <TodoItem 
                    id={todo.id} 
                    key={todo.text} 
                    onComplete={()=>{completeTodo(todo.id)}}
                    onDelete={()=>{deleteTodo(todo.id)}}
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
export { AppUI };