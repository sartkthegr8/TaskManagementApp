import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: []
};

const TaskActions = {
  SET_TASKS: 'SET_TASKS',
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case TaskActions.SET_TASKS:
      return { ...state, tasks: action.payload };
    case TaskActions.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TaskActions.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        )
      };
    case TaskActions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
export { TaskActions };
