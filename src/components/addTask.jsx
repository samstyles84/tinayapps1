import React from 'react';

const AddTask = (props) => {
  const handleChange = (changeEvent) => {
    console.dir(changeEvent.target.value);
  };
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTaskName">
        Task:
        <input
          type="text"
          onChange={handleChange}
          name="newTaskName"
          id="newTaskName"
        />
      </label>

      <label htmlFor="newDueDate">
        Due date:
        <input
          type="date"
          onChange={handleChange}
          name="newDueDate"
          id="newDueDate"
        />
      </label>

      <label htmlFor="newPriority">
        Priority
        <select name="newPriority" onChange={handleChange} id="newPriority" defaultValue="medium">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <button>Add new task</button>
    </form>
  );
};
export default AddTask;
