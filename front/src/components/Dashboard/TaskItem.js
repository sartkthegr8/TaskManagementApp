import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleEdit = () => {
    updateTask(task);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div 
      className="p-4 mb-4 border rounded-lg bg-gray-700"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}
    >
      <h4 className="text-lg font-bold mb-2">{task.title}</h4>
      <p className="text-gray-400 mb-2">{task.description}</p>
      <p className="text-gray-500 mb-2">Due Date: {task.dueDate}</p>
      <p className={`mb-4 ${task.status === 'Done' ? 'text-green-400' : task.status === 'In Progress' ? 'text-yellow-400' : 'text-red-400'}`}>Status: {task.status}</p>
      <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
        Edit
      </button>
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
