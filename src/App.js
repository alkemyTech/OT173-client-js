import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { Home } from './components/Home';
import './App.css';
import Login from './components/Login/Login';
import Activities from './components/Activities/Activities';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home />} />
        <Route to path='/news' element={<News />} />
        <Route path='/login' element={<Login />} />
        <Route path='/backoffice/activities' element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
