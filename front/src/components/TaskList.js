// src/components/TaskList.js
import React from 'react';
import Task from './Task';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { state } = useTaskContext();
  return (
    <div className="space-y-4">
      {state.tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
