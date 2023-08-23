import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div class="container">
      <h1 class="title">
        TODO List
        <span>Get one item done at a time</span>
      </h1>
      <ul class="task-list">
        <li>
          <span className="label">JS</span>
          <div className="action-box">
            <input type="checkbox" className="btn-action btn-action-done" />
            <button className="btn-action btn-action-remove">✖</button>
          </div>
        </li>
        <li>
          <span className="label">JS</span>
          <div className="action-box">
            <input type="checkbox" className="btn-action btn-action-done" />
            <button className="btn-action btn-action-remove">✖</button>
          </div>
        </li>
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input type="checkbox" className="btn-action btn-filter" id="filter" />
      </div>
      <form action="#" className="form">
        <label htmlFor="new-item">Add to the TODO list</label>
        <input type="text" id="new-item" />
        <button className="btn-add" type="submit">
          ADD ITEM
        </button>
      </form>
    </div>
  );
}

export default App;
