import React from "react";
import "./App.css";
import AddTask from "./components/addTask";
import TaskList from "./components/taskList";

class App extends React.Component {
  state = {
    tasks: [],
  };
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
        </header>

        <main>
          <br />
          <AddTask addTask={this.addTask} />
          <TaskList tasks={this.state.tasks} />
         
        </main>
      </div>
    );
  };

  addTask = (newTask) => {
    this.setState((currentState) => {
      return { tasks: [newTask, ...currentState.tasks] };
    });
  };
}

export default App;
