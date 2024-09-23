import React, { useState } from "react";
import Form from "./Form";
import "../css/todoitem.css";
import TodoList from "./TodoList";

function Todo() {
  const [clientInputs, setClientInputs] = useState([]); //-> empty array is attacjed to usestate() to store array of todo list

  return (
    <div className="main">
      <Form clientInputs={clientInputs} setClientInputs={setClientInputs} />
      <TodoList clientInputs={clientInputs} />
    </div>
  );
}

export default Todo;

// in order for input to recieve a value/data from a client we need to use onChange() attribute inside input tag
// in order to store the input data we need to initialize a new state with a [] square brackets as we recieve input as an array of list
// key={} is attached as key to prevent error on a pattern where every single added item should have a unique key as prop and that key object should be the same as it is attached to tje argument of map() method. "fruits.map(item=>{})"
