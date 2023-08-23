import React from "react";

function AddTaskForm({ newTask, handleInputChange, handleSubmit }) {
  return (
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
  );
}

export default AddTaskForm;
