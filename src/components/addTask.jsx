import React from "react";

class AddTask extends React.Component {
  state = {
    taskName: "",
    dueDate: "",
    priority: "Medium",
    noOfDays: 0,
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const newTask = { ...this.state };
    this.props.addTask(newTask);
    this.setState(() => {
      return { taskName: "", dueDate: "" };
    });
  };
  handleChange = (changeEvent) => {
    const inputValue = changeEvent.target.value;
    const id = changeEvent.target.id;
    this.setState(
      (currentState) => {
        if (id === "dueDate") {
          let today = new Date();

          const formattedDueDate = Date.parse(inputValue);

          const daysTillDue = Math.ceil((formattedDueDate - today) / 86400000);

          return { [id]: inputValue, noOfDays: daysTillDue };
        }
        return { [id]: inputValue };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="taskName">
          Task:
          <input
            onChange={this.handleChange}
            type="text"
          name="taskName"
          id="taskName"
            value={this.state.taskName}
          />
        </label>

        <label htmlFor="dueDate">
          Due date:
          <input
            type="date"
            onChange={this.handleChange}
            name="dueDate"
            id="dueDate"
            value={this.state.dueDate}
          />
        </label>

        <label htmlFor="priority">
          Priority
          <select
            name="priority"
            onChange={this.handleChange}
            id="priority"
            defaultValue="Medium"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <button>Add new task</button>
      </form>
    );
  };
}
export default AddTask;
