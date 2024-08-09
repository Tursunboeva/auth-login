import  { useState } from 'react';
import axios from 'axios';


import '../login/Login.css'; 



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserLogin = async (e) => {
        e.preventDefault();

        
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", { email, password });
            console.log(response.data);
            
       
        
    };

    return (
        <>
            <form className="login-form" onSubmit={handleUserLogin}>
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
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
