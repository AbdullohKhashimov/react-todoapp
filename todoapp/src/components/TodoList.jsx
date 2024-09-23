import React from "react";
import TodoItem from "./TodoItem";
import "../css/todoitem.css";

function TodoList({ clientInputs }) {
  return (
    <div>
      {clientInputs.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}

export default TodoList;
