import React from "react";

import TodolistItem from "./todo-list-item";

const Todolist = () => {
  return (
    <ul>
      <li>
        <TodolistItem />
      </li>
      <li>
        <TodolistItem />
      </li>
    </ul>
  );
};

export default Todolist;
