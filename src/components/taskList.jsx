import React from "react";

const TaskList = (props) => {
  return (
    <ol>
      {props.tasks.map((task) => {
        return (
          <li key={task.taskName}>
            {task.taskName}, due: {task.dueDate} ({task.noOfDays} days).
            Priority: {task.priority}
          </li>
        );
      })}
    </ol>
  );

};

export default TaskList;
