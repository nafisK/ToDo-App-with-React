import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

let App = () => {
  // const info = [
  //   { id: 1, name: "To Do 1", complete: true },
  //   { id: 2, name: "To Do 2", complete: false },
  //   { id: 3, name: "To Do 3", complete: false },
  // ];

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    });

    todoNameRef.current.value = null;
  };

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add To Do</button>
      <button>Clear Completed</button>
      <div>0 let to do </div>
    </>
  );
};

export default App;
