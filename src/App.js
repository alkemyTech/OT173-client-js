import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { News } from './components/News';
import './App.css';
import SelectedNew from './components/components/SelectedNew/SelectedNew';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route path='/novedad/:id' element={<SelectedNew/>}/>
      </Routes>
    </div>
  );
}

export default App;
