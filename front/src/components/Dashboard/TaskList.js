import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks, searchTerm, filterStatus, updateTask, deleteTask }) => {
  const filteredTasks = tasks
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(task => (filterStatus ? task.status === filterStatus : true));

  const onDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const updatedTasks = tasks.map(t => 
      t.id === parseInt(taskId) ? { ...t, status } : t
    );
    setTasks(updatedTasks);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex gap-4">
      {['To-Do', 'In Progress', 'Done'].map(status => (
        <div 
          key={status} 
          className="flex-1 bg-gray-800 p-4 rounded-lg" 
          onDrop={(e) => onDrop(e, status)}
          onDragOver={allowDrop}
        >
          <h3 className="text-xl font-semibold mb-4">{status}</h3>
          {filteredTasks.filter(task => task.status === status).map(task => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
