import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div>
            <input 
                className="TodoSearch" 
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch };