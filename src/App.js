import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import News from './components/News/News';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Routes>
        <Route to exact path="/" element={user ? <Home /> : <Login />} />
        <Route to path="/news" element={<News />} />
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
