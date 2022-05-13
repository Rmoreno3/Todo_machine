import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles/TodoSearch.css'

function TodoSearch() {
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
  }

  return(
    <div className="searchContent">
      <FontAwesomeIcon icon={faMagnifyingGlass} id="search"/>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        onChange={onSearchValueChange}/>
    </div>
  );
}

export { TodoSearch };