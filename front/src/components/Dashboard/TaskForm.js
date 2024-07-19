import React, { useState } from 'react';

const TaskForm = ({ addTask, updateTask }) => {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '', status: 'To-Do' });
  const [editTaskId, setEditTaskId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    if (task.title.trim()) {
      if (editTaskId) {
        updateTask({ ...task, id: editTaskId });
        setEditTaskId(null);
      } else {
        addTask(task);
      }
      setTask({ title: '', description: '', dueDate: '', status: 'To-Do' });
    }
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Task Form</h2>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
        placeholder="Task Title"
        className="w-full p-2 border rounded bg-gray-600 text-white mb-4"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleInputChange}
        placeholder="Task Description"
        className="w-full p-2 border rounded bg-gray-600 text-white mb-4"
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleInputChange}
        className="w-full p-2 border rounded bg-gray-600 text-white mb-4"
      />
      <select
        name="status"
        value={task.status}
        onChange={handleInputChange}
        className="w-full p-2 border rounded bg-gray-600 text-white mb-4"
      >
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        {editTaskId ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default TaskForm;
