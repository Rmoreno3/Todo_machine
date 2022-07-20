import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  return(
    <div className="searchContent">
      <FontAwesomeIcon icon={faMagnifyingGlass} id="search"/>
      <input 
        className="TodoSearch"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}/>
    </div>
  );
}

export { TodoSearch };