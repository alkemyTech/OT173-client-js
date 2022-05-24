import React from "react";
import { Navigate } from 'react-router-dom';
import { ROLES } from "../../constants/Roles";


const isLogIn = () => {
    const roleId = localStorage.getItem('roleId');
    return roleId === ROLES.USER;
}

const useAuth = () => {
    return {
        auth: isLogIn()
    };
}

const ProtectedUserRoute = (component) => {
    const { auth } = useAuth()

    return auth ? component : <Navigate to="/" />
}

export default ProtectedUserRoute;