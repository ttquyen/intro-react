import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([
    { id: "task_1", title: "Learn JS", status: 1 },
    { id: "task_2", title: "Code TODO list level 2", status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTaskList([...taskList, task]);
      setNewTask("");
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleShowIncomplete = (e) => {
    setShowIncomplete(e.target.checked);
  };
  const setTaskStatus = (taskID, taskStatus) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskID) {
          return { ...task, status: taskStatus ? 1 : 0 };
        }
        return task;
      })
    );
  };
  const removeTask = (taskID) => {
    setTaskList(taskList.filter((task) => task.id !== taskID));
  };

  return (
    <div className="container">
      <h1 className="title">
        TODO List
        <span>Get one item done at a time</span>
      </h1>
      <ul className="task-list">
        {taskList
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <li key={task.id} className={task.status ? "done" : ""}>
              <span className="label">{task.title}</span>
              <div className="action-box">
                <input
                  type="checkbox"
                  className="btn-action btn-action-done"
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                  checked={Boolean(task.status)}
                />
                <button
                  className="btn-action btn-action-remove"
                  onClick={() => removeTask(task.id)}
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          className="btn-action btn-filter"
          id="filter"
          checked={showIncomplete}
          onChange={handleShowIncomplete}
        />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="new-item">Add to the TODO list</label>
        <input
          type="text"
          id="new-item"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn-add" type="submit">
          ADD ITEM
        </button>
      </form>
    </div>
  );
}

export default App;
