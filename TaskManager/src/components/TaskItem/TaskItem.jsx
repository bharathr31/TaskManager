import React from 'react';
import './TaskItem.css';
import { useTask } from '../../context/TaskContext';

const TaskItem = ({ task, screen }) => {
  const { toggleComplete, removeTask } = useTask();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
       <label className="custom-radio">
          <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(screen, task.id)}
    />
  <span className="radio-mark"></span>
 </label>
 <span>
   {task.text}
   {screen === 'planned' && task.date && (
     <small style={{ marginLeft: '1rem', color: '#888' }}>📅 {task.date}</small>
   )}
  </span>
</div>
    <button onClick={() => removeTask(screen, task.id)}>✕</button>
    </div>
  );
};

export default TaskItem;