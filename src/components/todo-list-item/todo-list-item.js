import React from "react";
import "./todo-list-item.css";

const TodolistItem = ({ label, important = false }) => {
  let classNames = "todo-list-item";
  return (
    <span className={classNames}>
      <span className="todo-list-item-label">{label}</span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation"></i>
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa bi-trash"></i>
      </button>
    </span>
  );
};

export default TodolistItem;
