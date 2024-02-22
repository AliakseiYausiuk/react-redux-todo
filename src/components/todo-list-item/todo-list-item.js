import React from "react";
import "./todo-list-item.css";

export default class TodolistItem extends React.Component {
  render() {
    const { label, important = false } = this.props;
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
  }
}
