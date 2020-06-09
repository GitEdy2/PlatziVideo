import React from 'react';

const Header = () => {(
    <header className="header">
        <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="" />

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt="User" />
                <p>Perfil</p>
                <ul>
                    <li><a href="#">Cuenta</a></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>
            </div>
        </div>
    </header>
)};

export default Header;