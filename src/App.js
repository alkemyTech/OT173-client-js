import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { News } from './components/News';
import './App.css';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SingUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
