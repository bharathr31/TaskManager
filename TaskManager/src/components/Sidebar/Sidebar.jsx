import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Tasks</h2>
      <nav>
        <NavLink to="/" end activeclassname="active"> 
        <div className="myday-container">
           <img src={assets.sunny_day_logo} alt="" />
           <p>My Day</p>
        </div>
        </NavLink>
        <NavLink to="/important" activeclassname="active">
          <div className="myday-container">
           <img src={assets.pin} alt="" />
           <p>Important</p>
          </div>
        </NavLink>
        <NavLink to="/planned" activeclassname="active">
          <div className="myday-container">
           <img src={assets.project_manage_icon} alt="" />
           <p>Planned</p>
          </div>
        </NavLink>
      </nav>
      <hr />
    </div>
  );
};

export default Sidebar;
