import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './components/Home/Home';
import EditHome from './components/EditHome/EditHome';
import News from './components/News/News';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Activity from './components/Activity/Activity';
import { ContactForm } from './components/contact/ContactForm';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import UserProfile from './components/Profile/UserProfile';
import { EditUserForm } from './components/editUserForm/EditUserForm';

import { LayoutBackOffice } from './layout/LayoutBackOffice';
import BackofficeNews from './components/backoffice/news';
import { EditOrganizationForm } from './components/editOrganizationForm/EditOrganizationForm';
import ListUsers from './components/users/ListUsers';

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/edituser" element={<EditUserForm />} />
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route to path="/backoffice/news" element={<BackofficeNews />} />
        <Route
          to
          path="/backoffice/edit-organization"
          element={<EditOrganizationForm />}
        />
        <Route to path="/backoffice/users" element={<ListUsers />} />
      </Routes>
    </div>
  );
}

export default App;
