import React from 'react';
import { Route, Routes } from 'react-router';
import { News } from './components/News';
import { ContactScreen } from './components/contacto/ContactScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<ContactScreen />} />
        <Route to path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
