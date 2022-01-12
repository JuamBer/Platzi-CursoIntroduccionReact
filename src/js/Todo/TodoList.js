import React from "react";
import '../../css/Todo/TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList"> 
            {props.children} 
        </section>
    );
}

export { TodoList };