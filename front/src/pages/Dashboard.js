import React, { useEffect } from 'react';
import axios from 'axios';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { useTaskContext, TaskActions } from '../context/TaskContext';

const Dashboard = () => {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        dispatch({ type: TaskActions.SET_TASKS, payload: response.data });
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <TaskForm />
        {state.tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
