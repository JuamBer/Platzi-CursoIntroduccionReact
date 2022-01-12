import React from "react";
import '../../css/Todo/TodoItem.css';
import check_box_black from '../../svg/check_box_black.svg';
import check_box_outline_blank_black from '../../svg/check_box_outline_blank_black.svg';
import clear_black from '../../svg/clear_black.svg';

function TodoItem(props) {


    

    const onComplete = (id) =>{
        let todo = document.getElementById(id);
        todo.src = check_box_black;
        alert('Ya completaste el todo '+props.text)
    }
    const onInComplete = (id) => {
        let todo = document.getElementById(id);
        todo.src = check_box_outline_blank_black;
        alert('Ya no está completado el todo ' + props.text)
    }
    const onDelete = (id) => {
        alert('Borraste el todo ' + props.text)
    }

    let svg = <img
        id={
            props.id
        }
        onClick = {
            () => {
                props.completed ? onInComplete(props.id) : onComplete(props.id)
            }
        }
        className = {
            "svg"
        }
        src = {
            props.completed ? check_box_black : check_box_outline_blank_black
        }
    />;
    
    
    

    return (
        <li className="TodoItem">
            <span 
                className={
                    props.completed ? "Icon Icon-check--active" : "Icon Icon-check"
                }
            >
                {svg}
            </span>
          
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>

            <span 
                className = 'Icon Icon-delete' 
                
            >
                <img src={clear_black} onClick={onDelete}/>
            </span>
        </li>
    );

}

export { TodoItem };