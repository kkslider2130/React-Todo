import React from "react";
import ToDoItem from "./TodoItems";

const ToDoList = props => {
  console.log(props.toDo);
  return (
    <div className="toDolist">
      {props.toDo.map(item => (
        <ToDoItem key={item.id} item={item} checkItem={props.checkItem} />
      ))}
    </div>
  );
};

export default ToDoList;
