import React, { useState } from "react";
import TodoList from "./TodoList";

let App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add To Do</button>
      <button>Clear Completed</button>
      <div>0 let to do </div>
    </>
  );
};

export default App;
