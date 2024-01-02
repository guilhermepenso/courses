import React, { useState } from 'react';

import "./style.css";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('email', email);
        console.log('password', password);
        console.log('login');
    }

    return (
        <div id="login">
            <h1 className="tittle">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value) } />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="passowrd" 
                    name="passowrd" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }/>
                </div>
                <div className="actions">
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;