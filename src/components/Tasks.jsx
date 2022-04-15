import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    console.log('tasks handleTaskDeletion');
    console.log(handleTaskDeletion);
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
