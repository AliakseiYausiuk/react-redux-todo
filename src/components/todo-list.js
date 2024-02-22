import React from "react";

import TodolistItem from "./todo-list-item";

const Todolist = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <TodolistItem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default Todolist;
