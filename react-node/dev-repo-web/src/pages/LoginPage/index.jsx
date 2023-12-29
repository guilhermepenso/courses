import React from 'react';

import "./style.css";

const LoginPage = () => (
    <div id="login">
        <h1 className="tittle">Login</h1>
        <div className="form">
            <div className="field">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="password">Senha:</label>
                <input type="passowrd" name="passowrd" id="password" />
            </div>
            <div className="actions">
                <button>Entrar</button>
            </div>
        </div>
    </div>
) 

export default LoginPage;