import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;





/*import React from "react";

function ToDoItem(props) {
  return (
    <li className="todo-item">
      <span>{props.text}</span>
      <button
        className="delete-button"
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;*/

