// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuthContext();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', description: '', dueDate: '', status: 'To-Do' });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const addTask = () => {
    if (task.title.trim()) {
      setTasks([...tasks, { ...task, id: Date.now() }]);
      setTask({ title: '', description: '', dueDate: '', status: 'To-Do' });
    }
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700 mb-6">Welcome to your dashboard, {user ? user.name : 'User'}!</p>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mb-6">
          Logout
        </button>
        <div className="w-full mb-6">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            placeholder="Task Title"
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            placeholder="Task Description"
            className="w-full p-2 border rounded mb-2"
          ></textarea>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          />
          <select
            name="status"
            value={task.status}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Task
          </button>
        </div>
        <div className="w-full">
          {tasks.map(task => (
            <div key={task.id} className="p-4 mb-4 border rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
              <p className="text-gray-700 mb-2">{task.description}</p>
              <p className="text-gray-500 mb-2">Due Date: {task.dueDate}</p>
              <p className={`mb-4 ${task.status === 'Done' ? 'text-green-500' : task.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>Status: {task.status}</p>
              <button onClick={() => updateTask(task.id, { ...task, status: task.status === 'Done' ? 'To-Do' : 'Done' })} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                {task.status === 'Done' ? 'Mark as To-Do' : 'Mark as Done'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
