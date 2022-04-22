import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { News } from './components/News';
import './App.css';
import { FormEditUser } from './components/formUserEdit/FormEditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<FormEditUser />} />
        <Route to path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
