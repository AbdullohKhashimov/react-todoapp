import React, { useState } from "react";
import Form from "./Form";
import "../css/todoitem.css";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Todo() {
  const [todos, setTodos] = useState([]); //-> empty array is attacjed to usestate() to store array of todo list
  const completed = todos.filter((item) => item.done).length;
  const totalTodos = todos.length;
  return (
    <div className="main">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completed={completed} totalTodos={totalTodos} />
    </div>
  );
}

export default Todo;

// in order for input to recieve a value/data from a client we need to use onChange() attribute inside input tag
// in order to store the input data we need to initialize a new state with a [] square brackets as we recieve input as an array of list
// key={} is attached as key to prevent error on a pattern where every single added item should have a unique key as prop and that key object should be the same as it is attached to tje argument of map() method. "fruits.map(item=>{})"
