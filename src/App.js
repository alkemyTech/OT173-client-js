import React from 'react';
import { Route, Routes } from 'react-router';

import { Home } from './components/Home';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
import NewsDetail from './components/NewsDetail/NewsDetail';
import SignUp from './components/SignUp/SignUp';
import News from './components/News/News';
import Activity from './components/Activity/Activity';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path="/" element={<Home />} />
        <Route to path="/news" element={<News />} />
        <Route path='/news/:id' element={<NewsDetail/>}/>
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route to path="/activities/:id" element={<Activity />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
