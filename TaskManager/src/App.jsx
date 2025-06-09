import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route, useLocation, useLoaderData } from 'react-router-dom';
import MyDay from './screens/MyDay/MyDay';
import Important from './screens/Important/Important';
import Planned from './screens/Planned/Planned';
import { assets } from './assets/assets';

const App = () => {
  const location  = useLocation();
  let background_image = assets.my_day;

   if (location.pathname === '/') {
    background_image = assets.my_day;
  } else if (location.pathname === '/important') {
    background_image = assets.required;
  } else if (location.pathname === '/planned') {
    background_image = assets.planned;
  }

  return (
    <div className="app">
      <Sidebar />
        <div
        className="main-content"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Routes>
          <Route path="/" element={<MyDay />} />
          <Route path="/important" element={<Important />} />
          <Route path="/planned" element={<Planned />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
