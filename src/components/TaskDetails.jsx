import React from "react";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBlackButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBlackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
    </>
  );
};

export default TaskDetails;
