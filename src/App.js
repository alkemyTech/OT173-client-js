import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import { Home } from './components/Home';
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
        <Route to path='/backoffice' element={<LayoutBackOffice/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;