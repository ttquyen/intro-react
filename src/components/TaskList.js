import React, { Fragment } from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncomplete,
  setTaskStatus,
  removeTask,
  handleShowIncomplete,
}) {
  return (
    <Fragment>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
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
    </Fragment>
  );
}

export default TaskList;
