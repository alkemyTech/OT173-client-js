import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
import { EditOrganizationForm } from './components/editOrganizationForm/EditOrganizationForm';
import NewsDetail from './components/NewsDetail/NewsDetail';
import SignUp from './components/SignUp/SignUp';
import News from './components/News/News';
import ListUsers from './components/users/ListUsers';
import './App.css';
import BackofficeNews from './components/backoffice/news';
import { ContactForm } from './components/contact/ContactForm';
import EditHome from './components/EditHome/EditHome';
import { EditUserForm } from './components/editUserForm/EditUserForm';
import UserProfile from './components/Profile/UserProfile';
import OutletLayout from './layout/OutletLayout';
import ListContacts from "./components/ListContacts/ListContacts"

function App() {
  return (
    <div className="App">
      <Routes>
            {/* Rutas publicas */}
          <Route path="/" element={<OutletLayout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<NewsDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="contact" element={<ContactForm />} />
          </Route>
            {/* Menu de opciones BackOffice Admin */}
          <Route path="/backoffice" element={<OutletLayout />}>
            <Route index element={<LayoutBackOffice />} />
            <Route path="users" element={<ListUsers />} />
            <Route path="edithome" element={<EditHome />} />
            <Route path="edituser" element={<EditUserForm />} />
            <Route path="user" element={<UserProfile />} />
            <Route path="edit-organization" element={<EditOrganizationForm/>}/> 
            <Route path="news" element={<BackofficeNews />} />
          </Route>
            {/* Menu de opciones BackOffice User */}
          <Route path="/backoffice/user" element={<UserProfile />} />
          <Route path="/backoffice/contacts" element={<ListContacts />} />
      </Routes>
    </div>
  );
}

export default App;
