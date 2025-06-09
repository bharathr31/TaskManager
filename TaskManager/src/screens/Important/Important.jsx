import React from 'react';
import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';
import './Important.css';

const Important = () => {
  return (
    <div className='important'>
      <div className='important-top'>
        <h2>Important</h2>
        <p>
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <div className='important-list'>
        <TaskList screen="important" />
      </div>

      <div className='important-bottom'>
        <TaskInput screen="important" />
      </div>
    </div>
  );
};

export default Important;
