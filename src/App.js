import React from 'react';
import './App.css';
import AddTask from './components/addTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>

      <main>
        <br />
        <AddTask />
        <ol>
          <li>
            Task 1 ,due:{} ({} days). priority,{}
          </li>
          {/* <li>Task 1 ,due:{dueDate} ({timeLeft} days). priority,{priority}</li> */}
        </ol>
        <form action="">
          <button>Remove checked tasks</button>
        </form>
      </main>
    </div>
  );
}

export default App;
