import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/user/userSlice'

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    
    const handleLogout = (e) => {
        dispatch(logout())
    }

    return (
        <div>
            <p>Bienvenido {user.name}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout