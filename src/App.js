import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { News } from './components/News';
import FormNews from './components/formNews/FormNews';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
      </Routes>
      <FormNews />
    </div>
  );
}

export default App;