import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div>
      <p>{task.title}</p>
      <button>Delete</button>
    </div>
  );
};

export default TaskCard;
