import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
import NewsDetail from './components/NewsDetail/NewsDetail';
import News from './components/News/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path="/" element={<Home />} />
        <Route to path="/news" element={<News />} />
        <Route path='/news/:id' element={<NewsDetail/>}/>
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
