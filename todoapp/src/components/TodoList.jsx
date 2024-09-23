import React from "react";
import TodoItem from "./TodoItem";
import "../css/todoitem.css";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}

export default TodoList;
