import React, { useState } from 'react';
import axios from '../../api/axios';
import '../register/Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleUserRegister = (e) => {
        e.preventDefault();

        const token = "your_access_token_here";

        axios.get("/auth/profile", { 
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: {
                name,
                email,
                password,
                role,
                avatar
            }
        })
        .then(response => console.log(response.data))
        
    };

    return (
        <>
            <form className="register-form" onSubmit={handleUserRegister}>
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email"  
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password"  
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="text"  
                    placeholder="Enter your role" 
                    value={role}
                    onChange={(e) => setRole(e.target.value)} 
                />
                <input 
                    type="url" 
                    placeholder="Enter your avatar URL" 
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)} 
                />
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;
