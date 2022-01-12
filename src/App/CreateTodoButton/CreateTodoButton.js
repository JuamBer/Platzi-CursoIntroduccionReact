import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = ()=>{
        alert("Click");
    }

    return (
        <div className="CreateTodoButton">
            <button
                onClick={onClickButton}
            >   
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };