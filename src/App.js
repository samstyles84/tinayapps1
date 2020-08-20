import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <body>
        <main>
          <br />
          <form action="">
            <label htmlFor="newTaskName">Task:</label>
            <input type="text" name="newTaskName" id="newTaskName" />
            <label htmlFor="newDueDate">Due date:</label>
            <input type="date" name="newDueDate" id="newDueDate" />

            <label htmlFor="newPriority">Priority</label>
            <select name="newPriority" id="newPriority">
              <option value="high">High</option>
              <option selected value="medium">
                Medium
              </option>
              <option value="low">Low</option>
            </select>
            <button>Add new task</button>
          </form>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
          <form action="">
            <button>Remove checked tasks</button>
          </form>
        </main>
      </body>
    </div>
  );
}

export default App;
