import React from "react";

function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
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
  );
}

export default TaskItem;
