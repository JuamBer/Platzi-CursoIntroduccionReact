import React from "react";
import '../../css/Todo/TodoItem.css';
import check_box_black from '../../svg/check_box_black.svg';
import check_box_outline_blank_black from '../../svg/check_box_outline_blank_black.svg';
import clear_black from '../../svg/clear_black.svg';

function TodoItem(props) {

    

    let svg;
    let svgcheck;

    function changeCheck(status) {
        if (status){

        }else{

        }
    }

    svg = <img onMouseOver={changeCheck(true)} className="svg" src={props.completed ? check_box_black : check_box_outline_blank_black}/>;
    svgcheck = <img onMouseOver={changeCheck(false)} className="svgcheck" src={check_box_black}/>;
    
    
    

    return (
        <li className="TodoItem">
            <span className={
                    props.completed ? "Icon Icon-check--active" : "Icon Icon-check"
                }>
                {svg}
                {svgcheck}
            </span>
          
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>

            <span className = 'Icon Icon-delete' >
                <img src={clear_black}/>
            </span>
        </li>
    );

}

export { TodoItem };