import React from 'react';
import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';
import './Planned.css';

const Planned = () => {
  return (
    <div className='planned'>
      <div className='planned-top'>
        <h2>Planned</h2>
        <p>
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      <div className='planned-list'>
        <TaskList screen="planned" />
      </div>
      <div className="planned-bottom">
        <TaskInput  screen="planned" />
      </div>
    </div>
  );
};

export default Planned;
