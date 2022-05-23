import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import OutletLayout from './layout/OutletLayout';
import Home from './components/Home/Home';
import FormActivities from './components/formActivities/FormActivities';
import News from './components/News/News';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Activity from './components/Activity/Activity';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ListUsers from './components/users/ListUsers';

import Activities from './components/Activities/Activities';
import FormNews from './components/formNews/FormNews';
import { ContactForm } from './components/contact/ContactForm';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import EditHome from './components/EditHome/EditHome';
import { EditUserForm } from './components/editUserForm/EditUserForm';
import UserProfile from './components/Profile/UserProfile';
import ListContacts from './components/ListContacts/ListContacts';
import BackofficeTestimonials from './components/backoffice/testimonials';
import { EditOrganizationForm } from './components/editOrganizationForm/EditOrganizationForm';
import BackofficeNews from './components/backoffice/news';
import { BackofficeCategories } from './components/categories/ListOfCategories';
import CategoryForm from './components/CategoryForm/CategoryForm';
import ProtectedAdminRoutes from './components/Routes/ProtectedAdminRoutes';
import ProtectedUserRoute from './components/Routes/ProtectedUserRoute';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
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

        <Route path="/backoffice" element={<ProtectedAdminRoutes />}>
          <Route index element={<LayoutBackOffice />} />
          <Route path="users" element={<ListUsers />} />
          <Route path="edithome" element={<EditHome />} />
          <Route path="edituser" element={<EditUserForm />} />
          <Route path="user" element={<UserProfile />} />
          <Route path="edit-organization" element={<EditOrganizationForm />} />
          <Route path="news" element={<BackofficeNews />} />
          <Route path="activities" element={<Activities />} />
          <Route path="testimonials" element={<BackofficeTestimonials />} />
          <Route path="categories" element={<BackofficeCategories />} />
          <Route path="category" element={<CategoryForm />} />
          <Route path="activities/create" element={<FormActivities />} />
          <Route path="activities/update/:id" element={<FormActivities />} />
          <Route path="news/create" element={<FormNews />} />
          <Route path="news/update/:id" element={<FormNews />} />
          <Route path="contacts" element={<ListContacts />} />
        </Route>

        {/* Opciones editar perfil usuario registrado */}
        <Route path="/user" element={<ProtectedUserRoute />}>
          <Route path="edit" element={<UserProfile />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
