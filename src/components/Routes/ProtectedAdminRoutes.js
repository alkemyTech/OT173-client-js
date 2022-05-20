import React from "react";
import {Navigate} from 'react-router-dom';
import { ROLES } from "../../constants/Roles";
import { LayoutBackOffice } from "../../layout/LayoutBackOffice";

const isAdmin =  () => {
    const roleId = localStorage.getItem('roleId');
  
    return roleId === ROLES.ADMIN;
    
}

const useAuth = () => {
   
    return {
        auth: isAdmin()
    };
   
}

const ProtectedAdminRoutes = () => {
   const {auth} = useAuth()

   return auth ? <LayoutBackOffice /> : <Navigate to="/" />
}

export default ProtectedAdminRoutes;