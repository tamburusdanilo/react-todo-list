import React from "react";

import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "solid 6px chartreuse" } : {}}
    >
      <div className="class-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>

        <button className="see-task-details-button"
        onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
  // return <div handleTaskClick={handleTaskClick} className="task-container">{task.title}</div>;
};

export default Task;
