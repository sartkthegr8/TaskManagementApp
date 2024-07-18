import React from 'react';
import axios from 'axios';
import { useTaskContext, TaskActions } from '../context/TaskContext';

const Task = ({ task }) => {
  const { dispatch } = useTaskContext();

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`); // Delete task
      dispatch({ type: TaskActions.DELETE_TASK, payload: taskId });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-gray-600">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p className="text-gray-600">Status: {task.status}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
      <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  );
};

export default Task;
