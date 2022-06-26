import React, { useState } from "react";
import TodoList from "./TodoList";

let App = () => {
  const [todos, setTodos] = useState(["ToDo 1", "ToDo 2", "ToDo 3"]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add To Do</button>
      <button>Clear Completed</button>
      <div>0 let to do </div>
    </>
  );
};

export default App;
