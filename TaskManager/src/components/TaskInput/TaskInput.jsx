import React, { useState } from 'react';
import './TaskInput.css';
import { useTask } from '../../context/TaskContext';

const TaskInput = ({ screen }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const { addTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(screen, text, screen === 'planned' ? date : null);
      setText('');
      setDate('');
    }
  };

  return (
   <form
  className={`task-input ${screen === 'planned' ? 'three' : 'two'}`}
  onSubmit={handleSubmit}
>
  <input
    type="text"
    placeholder="Add a task..."
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  {screen === 'planned' && (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  )}
  <button type="submit">Add</button>
</form>

  );
};


export default TaskInput;
