import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
import News from './components/News/News';
import './App.css';
import FormNews from './components/formNews/FormNews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<News />}/>
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/news" element={<FormNews />} />
        <Route path="/admin/news/:id" element={<FormNews />} />
      </Routes>
    </div>
  );
}

export default App;
