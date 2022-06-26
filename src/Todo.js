import React from "react";

export default function todo({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} readOnly />
        {todo.name}
      </label>
    </div>
  );
}
