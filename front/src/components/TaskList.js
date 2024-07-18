// src/components/TaskList.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useTaskContext, TaskActions } from '../context/TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks'); // Replace with your backend endpoint
        dispatch({ type: TaskActions.SET_TASKS, payload: response.data });
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {state.tasks.map(task => (
          <li key={task._id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.dueDate}</div>
            <div>Status: {task.status}</div>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
