import React from "react";
import "./App.css";
import AddTask from "./components/addTask";
import TaskList from "./components/taskList";
import RemoveTask from "./components/removeTasks";
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
          <TaskList
            tasks={this.state.tasks}
            toggleChecked={this.toggleChecked}
          />

          <button name="saveTasks" id="saveTasks" onClick={this.saveList}>
            save
          </button>
          <button
            name="removeAllTasks"
            id="removeAllTasks"
            onClick={this.removeAllTasks}
          >
            removeAllTasks
          </button>
          <RemoveTask tasks={this.state.tasks} />
        </main>
      </div>
    );
  };
  toggleChecked = (taskToCheck) => {
    this.setState((currentState) => {
      console.log("tasktocheck", taskToCheck);
      console.log("currentstate", currentState);
      console.log("currentstate.tasks", currentState.tasks);
      return { ...currentState };
    });

    // return {
    //   tasks: {
    //     ...tasks,
    //     [taskToCheck]: { ...tasks[taskToCheck], isChecked: !isChecked },
    //   },
    // };
    // });
  };

  removeAllTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    localStorage.clear();
    if (tasks) {
      this.setState(() => {
        return { tasks: [] };
      });
    }
  };
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState(() => {
        return { tasks };
      });
    }
  }
  saveList = () => {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };
  addTask = (newTask) => {
    this.setState((currentState) => {
      return { tasks: [newTask, ...currentState.tasks] };
    });
  };
}

export default App;
