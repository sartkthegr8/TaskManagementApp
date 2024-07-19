// src/context/TaskContext.js
import React, { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const TaskActions = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TaskActions.DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
export { TaskActions };
