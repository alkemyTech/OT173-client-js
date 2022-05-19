import React from "react";
import {Navigate} from 'react-router-dom';
import OutletLayout from "../../layout/OutletLayout";


const useAuth = () => {
    const _user=localStorage.getItem("roleId")
    if(_user) {
        return {
            auth: true
        }
    }else{
        return {
            auth: false            
        }
    }   
}

const ProtectedUserRoute = () => {
   const {auth} = useAuth()

   return auth ? <OutletLayout /> : <Navigate to="/" />
}

export default ProtectedUserRoute;