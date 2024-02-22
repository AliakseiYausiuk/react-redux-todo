import React from "react";
import ReactDOM from "react-dom";

import Todolist from "./components/todo-list/todo-list";
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";

const App = () => {
  const todoData = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Build React App", important: false, id: 2 },
    { label: "You are power man", important: true, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <Todolist todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
