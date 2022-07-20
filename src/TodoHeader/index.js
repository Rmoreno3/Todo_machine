import React from "react";
import "./TodoHeader.css"

function TodoHeader({ children, loading }) {
  return(
    <header className="todoHeader--container ">
      {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
    </header>
  );
}

export { TodoHeader };