import React, { createContext, useContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    //  Load from localStorage on FIRST render only
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : {
      myday: [],
      important: [],
      planned: []
    };
  });

  // Save to localStorage every time tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (screen, text, date = null) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      important: screen === 'important',
      date,
    };
    setTasks(prev => ({
      ...prev,
      [screen]: [...prev[screen], newTask]
    }));
  };

  const removeTask = (screen, taskId) => {
    setTasks(prev => ({
      ...prev,
      [screen]: prev[screen].filter(task => task.id !== taskId)
    }));
  };

  const toggleComplete = (screen, taskId) => {
    setTasks(prev => ({
      ...prev,
      [screen]: prev[screen].map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  const reorderTasks = (screen, newTaskOrder) => {
    setTasks(prev => ({
      ...prev,
      [screen]: newTaskOrder
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleComplete, reorderTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
