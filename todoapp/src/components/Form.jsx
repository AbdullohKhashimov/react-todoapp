import React, { useState } from "react";

function Form({ clientInputs, setClientInputs }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    // prevents the page to re-render when the form is submitted
    e.preventDefault();
    setClientInputs([...clientInputs, task]);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
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
