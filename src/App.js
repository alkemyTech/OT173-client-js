import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import { Home } from './components/Home';
import './App.css';
import Login from './components/Login/Login';
import FormikActivities from './components/formActivities/FormikActivities';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News/>}/>
        <Route to path='/backoffice' element={<LayoutBackOffice/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/actividades' element={<FormikActivities />}/>
        <Route path='/actividades/:id' element={<FormikActivities />}/>
      </Routes>
    </div>
  );
}

export default App;