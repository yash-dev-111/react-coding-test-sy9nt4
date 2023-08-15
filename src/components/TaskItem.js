import React from 'react';

const TaskItem = ({ task, handleCheckboxChange }) => {
  return (
    <li className={task.completed ? 'completed-task' : ''}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCheckboxChange(task.id)}
        />
        <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      </label>
    </li>
  );
};

export default TaskItem;
