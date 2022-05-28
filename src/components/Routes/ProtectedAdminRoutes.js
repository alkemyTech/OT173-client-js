import React from "react";
import { Navigate } from 'react-router-dom';
import { ROLES } from "../../constants/Roles";

const isAdmin = () => {
    const roleId = localStorage.getItem('roleId');

    return roleId === ROLES.ADMIN;

}

const useAuth = () => {

    return {
        auth: isAdmin()
    };

}

const ProtectedAdminRoutes = (component) => {
    const { auth } = useAuth()

    return auth ? component : <Navigate to="/" />
}

export default ProtectedAdminRoutes;