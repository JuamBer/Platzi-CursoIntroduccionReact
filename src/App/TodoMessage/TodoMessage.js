import React from "react";
import './TodoMessage.css';

function TodoMessage({msg}){

    return ( 
        <div className="TodoMessage">
            <p>{msg}</p>
        </div>
    );
}

export {
    TodoMessage
};