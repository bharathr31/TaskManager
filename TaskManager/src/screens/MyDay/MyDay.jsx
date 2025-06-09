import React from 'react';
import TaskInput from '../../components/TaskInput/TaskInput';
import TaskList from '../../components/TaskList/TaskList';
import './MyDay.css'

const MyDay = () => {
  return (
    <div className='mydays'>
    <div className='myday-top'>
      <h2>My Day</h2>
          <p>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',   
          month: 'long' , 
          day: 'numeric'   
        })}
      </p>
      </div>
       <div className='myday-list'>
          <TaskList screen="myday" />
       </div>
      <div className="myday-bottom">
      <TaskInput screen="myday" />
    </div>
    </div>
  );
};

export default MyDay;
