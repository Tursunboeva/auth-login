import React, { useState } from 'react';
import axios from 'axios';
import '../register/Register.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');


    const handleUserRegister = (e) => {
        e.preventDefault();
        axios.post("https://api.escuelajs.co/api/v1/users/", { 
            name,email,password,avatar
        })
        .then(response => {
            if(response.status === 201){
                alert("Use created successflly")
                navigate('/login')
                toast.success("User created successfully!");
            }
            else{
                toast.error("Registration failed. Please try again.");
            }
        })
        
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
                    type="url" 
                    placeholder="Enter your avatar URL" 
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)} 
                />
               
                <button type="submit">Register</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default Register;




