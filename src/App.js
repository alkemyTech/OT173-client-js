import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { Home } from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home />} />
        <Route to path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
