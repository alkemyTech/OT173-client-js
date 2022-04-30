import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import { Home } from './components/Home';
import './App.css';
import Login from './components/Login/Login';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route to path='/backoffice' element={<LayoutBackOffice/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;