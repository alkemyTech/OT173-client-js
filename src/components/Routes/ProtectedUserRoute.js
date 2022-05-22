import React from "react";
import {Navigate} from 'react-router-dom';
import OutletLayout from "../../layout/OutletLayout";
import { ROLES } from "../../constants/Roles";


const isLogIn =  () => {
    const roleId = localStorage.getItem('roleId');
    return roleId === ROLES.USER;  
}

const useAuth = () => {
    return {
        auth: isLogIn()
    };   
}

const ProtectedUserRoute = () => {
   const {auth} = useAuth()

   return auth ? <OutletLayout /> : <Navigate to="/" />
}

export default ProtectedUserRoute;