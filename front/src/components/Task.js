// src/components/Task.js
import React from 'react';
import { useTaskContext, TaskActions } from '../context/TaskContext';

const Task = ({ task }) => {
  const { dispatch } = useTaskContext();

  const handleDelete = () => {
    dispatch({ type: TaskActions.DELETE_TASK, payload: task.id });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default Task;
