import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
