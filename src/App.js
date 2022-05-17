import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OutletLayout from './layout/OutletLayout';
import Home from './components/Home/Home';
import FormActivities from './components/formActivities/FormActivities';
import News from './components/News/News';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Activity from './components/Activity/Activity';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ListUsers from './components/users/ListUsers';
import './App.css';
import Activities from './components/Activities/Activities';
import FormNews from './components/formNews/FormNews';
import { ContactForm } from './components/contact/ContactForm';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import EditHome from './components/EditHome/EditHome';
import { EditUserForm } from './components/editUserForm/EditUserForm';
import UserProfile from './components/Profile/UserProfile';
import BackofficeTestimonials from './components/backoffice/testimonials';
import { EditOrganizationForm } from './components/editOrganizationForm/EditOrganizationForm';
import BackofficeNews from './components/backoffice/news';
import OutletLayout from './layout/OutletLayout';
import ListContacts from "./components/ListContacts/ListContacts"
import CategoryForm from './components/CategoryForm/CategoryForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<OutletLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="activities/:id" element={<Activity />} />
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
          <Route path="edit-organization" element={<EditOrganizationForm />} />
          <Route path="news" element={<BackofficeNews />} />
          <Route path="testimonials" element={<BackofficeTestimonials />} />
          <Route path="activities" element={<Activities />} />
          <Route path='category' element={<CategoryForm />}/>
        </Route>
        {/* Menu de opciones BackOffice User */}
        <Route path="/backoffice/user" element={<UserProfile />} />
        <Route path="/backoffice/activities/create" element={<FormActivities />} />
        <Route path="/backoffice/activities/update/:id" element={<FormActivities />} />
        <Route path="/backoffice/news/create" element={<FormNews />} />
        <Route path="/backoffice/news/update/:id" element={<FormNews />} />
        <Route path="/backoffice/contacts" element={<ListContacts />} />
      </Routes>
    </div>
  );
}

export default App;
