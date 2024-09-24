import React from "react";
import "../css/todoitem.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  const handleClick = (name) => {
    setTodos(
      todos.map((item) =>
        item.name === name ? { ...item, done: !item.done } : item
      )
    );
  };

  const className = item.done ? "span-tag" : "";

  return (
    <div>
      <div className="item-list">
        <span onClick={() => handleClick(item.name)} className={className}>
          {item.name}
        </span>

        <span>
          <button className="delete-btn" onClick={() => handleDelete(item)}>
            delete
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}

export default TodoItem;
