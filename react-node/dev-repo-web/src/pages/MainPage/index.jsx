import React from 'react';

import "./style.css";

const MainPage = () => { 

    const handleLogout = () => {
        console.log('logout');
    }

    const handleSearch = (query) => {
        console.log('query', query);
    }

    const handleClear = () => {
        console.log('clear');
    }

    return (
        <div id="main">
            <div className="nav">
                <h1 className="logo">SisRepo</h1>
                <button onClick={handleLogout}>Sair</button>
            </div>

            <div className="search">
                <label htmlFor="query">Procurar:</label>
                <input type="search" name="query" id="query" />
                <button onClick={handleClear}>Limpar</button>
                <button onClick={handleSearch}>Procurar</button>
            </div>

            <div className="repositories">
                <h2 className='tittle'>Repositórios</h2>

                <ul className="list">
                    <li className="item">
                        <div className="info">
                            <div className="owner">facebook</div>
                            <div className="name">react</div>
                        </div>
                        <button>Apagar</button>
                    </li>

                    <li className="item">
                        <div className="info">
                            <div className="owner">twitter</div>
                            <div className="name">angular</div>
                        </div>
                        <button>Apagar</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default MainPage;