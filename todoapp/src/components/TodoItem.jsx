import React from "react";
import "../css/todoitem.css";

function TodoItem({ item }) {
  return (
    <div>
      <div className="item-list">{item}</div>
      <hr className="line" />
    </div>
  );
}

export default TodoItem;
