import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { Home } from './components/Home';
import './App.css';
import Login from './components/Login/Login';
import SelectedNew from './components/SelectedNew/SelectedNew';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<SelectedNew></SelectedNew>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
