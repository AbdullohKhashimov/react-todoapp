import React, { useState } from "react";
import "../css/todoitem.css";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    // prevents the page to re-render when the form is submitted
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            className="input-txt"
            placeholder="enter to do item..."
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
