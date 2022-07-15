import React from "react";
import { TodoContext } from "../TodoContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TodoSearch.css'

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value);
  }

  return(
    <div className="searchContent">
      <FontAwesomeIcon icon={faMagnifyingGlass} id="search"/>
      <input 
        className="TodoSearch"
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}/>
    </div>
  );
}

export { TodoSearch };