import React from "react";

import Todolist from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Build React App", important: false, id: 2 },
    { label: "You are power man", important: true, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <Todolist todos={todoData} />
    </div>
  );
};

export default App;
