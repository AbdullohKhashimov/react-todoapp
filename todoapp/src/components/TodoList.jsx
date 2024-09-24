import React from "react";
import TodoItem from "./TodoItem";
import "../css/todoitem.css";

function TodoList({ todos, setTodos }) {
  return (
    <div className="task-list">
      {todos.map((item) => (
        <TodoItem
          item={item}
          key={item.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
