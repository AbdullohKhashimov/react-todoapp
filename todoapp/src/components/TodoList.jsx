import React from "react";
import TodoItem from "./TodoItem";
import "../css/todoitem.css";

function TodoList({ todos, setTodos }) {
  // slice creates a copy of an array
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="task-list">
      {sortedTodos.map((item) => (
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
