import React from "react";

const ToDoItem = props => {
  return (
    <div>
      <div
        onClick={() => props.checkItem(props.item.id)}
        className={`item ${props.item.checked ? "checked" : ""}`}
      >
        {props.item.name}
      </div>
    </div>
  );
};

export default ToDoItem;
