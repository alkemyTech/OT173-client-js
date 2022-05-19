import React from "react";
import {Navigate} from 'react-router-dom';
import { LayoutBackOffice } from "../../layout/LayoutBackOffice";


const useAuth = () => {
    const _user=localStorage.getItem("roleId")
    if (_user === "1") {
        return {
            auth: true
        }
    }else{
        return {
            auth: false            
        }
    }   
}

const ProtectedAdminRoutes = () => {
   const {auth} = useAuth()

   return auth ? <LayoutBackOffice /> : <Navigate to="/" />
}

export default ProtectedAdminRoutes;