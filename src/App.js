import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { Home } from './components/Home';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;