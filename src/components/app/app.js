import React, { Component } from "react";

import Todolist from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink coffee", important: false, id: 1 },
      { label: "Build React App", important: false, id: 2 },
      { label: "You are power man", important: true, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <Todolist todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
