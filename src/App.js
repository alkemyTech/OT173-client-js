import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import { LayoutBackOffice } from './layout/LayoutBackOffice';
import Login from './components/Login/Login';
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
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Routes>
        <Route to exact path="/" element={user ? <Home /> : <Login />} />
        <Route to path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route to path="/backoffice" element={<LayoutBackOffice />} />
        <Route to path="/backoffice/news" element={<BackofficeNews />} />
        <Route to path="/backoffice/users" element={<ListUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/edithome" element={<EditHome />} />
        <Route path="/edituser" element={<EditUserForm />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
