// src/context/TaskContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  tasks: [],
};

// Define actions
const TaskActions = {
  SET_TASKS: 'SET_TASKS',
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

// Reducer function to update state based on actions
const taskReducer = (state, action) => {
  switch (action.type) {
    case TaskActions.SET_TASKS:
      return { ...state, tasks: action.payload };
    case TaskActions.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TaskActions.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => (task._id === action.payload._id ? action.payload : task)),
      };
    case TaskActions.DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) };
    default:
      return state;
  }
};

// Create context
const TaskContext = createContext();

// TaskProvider component to wrap the application and provide state and actions
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to consume TaskContext
export const useTaskContext = () => useContext(TaskContext);

// Export TaskActions for use in components
export { TaskActions };
