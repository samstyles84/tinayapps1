import React from "react";
import "../App.css";

class TaskList extends React.Component {
  strikeThrough = (taskFormat) => {
    return taskFormat === "line-through" ? "" : "line-through";
  };

  handleClick = (clickEvent) => {
    let taskItem = clickEvent.target;
    if (taskItem.type === "checkbox") {
      taskItem = clickEvent.target.parentElement;
      taskItem.style.textDecoration = this.strikeThrough(
        taskItem.style.textDecoration
      );
    }
  };

  render = () => {
    return (
      <ul className="mainList">
        {this.props.tasks.map((task) => {
          return (
            <li key={task.taskName} onClick={this.handleClick}>
              <input type="checkbox" id="taskCheckbox" />
              {task.taskName}, due: {task.dueDate} ({task.noOfDays} days).
              Priority: {task.priority}
              <br />
            </li>
          );
        })}
      </ul>
    );
  };
}

export default TaskList;
