import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { News } from './components/News';
import { LayoutBackOffice } from './components/layout/LayoutBackOffice';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route to path='/backoffice' element={<LayoutBackOffice/>}/>
      </Routes>
    </div>
  );
}

export default App;
