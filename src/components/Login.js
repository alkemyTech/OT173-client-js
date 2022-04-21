import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice';

export const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name,
            email,
            pass,
            loggedIn: true
        }))
    }
    return (
        <div className='login'>
            <form className='login_form' onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input type='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
