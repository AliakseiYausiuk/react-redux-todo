import React from "react";
import ReactDOM from "react-dom";

import Todolist from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";

import "./index.css";

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

ReactDOM.render(<App />, document.getElementById("root"));
