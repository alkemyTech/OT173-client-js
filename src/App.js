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
import OutletLayoutSecondary from './layout/OutletLayoutSecondary';

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
          <Route path="contact" element={<ContactForm />} />
        </Route>

        {/* Menu de opciones BackOffice Admin */}

        <Route path="/backoffice" element={<OutletLayoutSecondary />}>
          <Route index element={ProtectedAdminRoutes(<LayoutBackOffice />)} />
          <Route path="users" element={ProtectedAdminRoutes(<ListUsers />)} />
          <Route path="edithome" element={ProtectedAdminRoutes(<EditHome />)} />
          <Route path="edituser" element={ProtectedAdminRoutes(<EditUserForm />)} />
          <Route path="user" element={ProtectedAdminRoutes(<UserProfile />)} />
          <Route path="edit-organization" element={ProtectedAdminRoutes(<EditOrganizationForm />)} />
          <Route path="news" element={ProtectedAdminRoutes(<BackofficeNews />)} />
          <Route path="activities" element={ProtectedAdminRoutes(<Activities />)} />
          <Route path="testimonials" element={ProtectedAdminRoutes(<BackofficeTestimonials />)} />
          <Route path="categories" element={ProtectedAdminRoutes(<BackofficeCategories />)} />
          <Route path='category' element={ProtectedAdminRoutes(<CategoryForm />)} />
          <Route path="activities/create" element={ProtectedAdminRoutes(<FormActivities />)} />
          <Route path="activities/update/:id" element={ProtectedAdminRoutes(<FormActivities />)} />
          <Route path="news/create" element={ProtectedAdminRoutes(<FormNews />)} />
          <Route path="news/update/:id" element={ProtectedAdminRoutes(<FormNews />)} />
          <Route path="contacts" element={ProtectedAdminRoutes(<ListContacts />)} />
        </Route>

        {/* Opciones editar perfil usuario registrado */}
        <Route path="/user" element={<OutletLayoutSecondary />}>
          <Route index element={ProtectedUserRoute(<UserProfile />)} />
          <Route path="edit" element={ProtectedUserRoute(<UserProfile />)} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
