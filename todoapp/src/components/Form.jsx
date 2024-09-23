import React, { useState } from "react";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    // prevents the page to re-render when the form is submitted
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          className="input-txt"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
