import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './components/Home/Home';
import EditHome from './components/EditHome/EditHome';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ListUsers from './components/users/ListUsers';
import News from './components/News/News';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Activity from './components/Activity/Activity';
import { ContactForm } from './components/contact/ContactForm';
import UserProfile from './components/Profile/UserProfile';
import { EditUserForm } from './components/editUserForm/EditUserForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path="/" element={<Home />} />
        <Route path="/edithome" element={<EditHome />} />
        <Route to path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route to path="/activities/:id" element={<Activity />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/edituser" element={<EditUserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route to path="/backoffice/users" element={<ListUsers />} />
      </Routes>
    </div>
  );
}

export default App;
