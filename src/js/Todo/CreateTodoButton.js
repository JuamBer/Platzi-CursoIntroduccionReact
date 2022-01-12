import React from "react";
import '../../css/Todo/CreateTodoButton.css';

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