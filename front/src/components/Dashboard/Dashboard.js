import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

 

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    checkTaskDeadlines();
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const checkTaskDeadlines = () => {
    tasks.forEach(task => {
      const dueDate = new Date(task.dueDate);
      const today = new Date();

      if (dueDate.toDateString() === today.toDateString()) {
        new Notification('Task Deadline Reminder', {
          body: `The task "${task.title}" is due today!`
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="text-gray-400 mb-6">Welcome, {user ? user.name : 'User'}!</p>

        <TaskForm addTask={addTask} updateTask={updateTask} />

        <button className="bg-red-800 text-white px-4 py-2 rounded w-full">
  <Link to="/login" className="w-full h-full flex justify-center items-center">
    Logout
  </Link>
</button>
      </div>

      {/* Right Content */}
      <div className="w-3/4 bg-gray-900 p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Saved Tasks</h2>
          <input
            type="text"
            placeholder="Search tasks"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded bg-gray-600 text-white"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 border rounded bg-gray-600 text-white"
          >
            <option value="">All</option>
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          searchTerm={searchTerm}
          filterStatus={filterStatus}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;
