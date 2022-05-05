import React from 'react';
import { Route, Routes } from 'react-router';

import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NewsDetail from './components/NewsDetail/NewsDetail';
import SignUp from './components/SignUp/SignUp';
import News from './components/News/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path="/" element={<Home />} />
        <Route to path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
