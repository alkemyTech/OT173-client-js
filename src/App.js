import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { News } from './components/News';
import './App.css';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login/>} />
        <Route to path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
