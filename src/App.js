import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

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
      <Header title="TODO List" subTitle="Get one item done at a time" />
      <TaskList
        tasks={taskList}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        handleShowIncomplete={handleShowIncomplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
