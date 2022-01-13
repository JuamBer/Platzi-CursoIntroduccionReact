import React from 'react';
import { TodoMessage } from "./TodoMessage/TodoMessage"; 
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoSearch } from "./TodoSearch/TodoSearch"; 
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton"; 
import { TodoContext } from "./TodoContext/TodoContext"
function AppUI(){

    return (
        <div className="main">
        <div className="container">
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {({
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                })=>(
                    <TodoList>
                        <TodoMessage/> 
                        
                        {searchedTodos.map(todo => ( 
                            <TodoItem 
                                id = {todo.id}
                                key = {todo.text}
                                onComplete = {() => {completeTodo(todo.id)}}
                                onDelete = {() => {deleteTodo(todo.id)}}
                                text = {todo.text}
                                completed = { todo.completed }
                            />))}

                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton/>

        </div>
        </div>
    );
}
export { AppUI };