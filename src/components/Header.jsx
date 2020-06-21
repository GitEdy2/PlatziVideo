import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import classNames from 'classnames';
import '../assets/styles/components/Header.scss';
import logo from  '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

    const { user, isLogin, isRegister } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    const headerClass = classNames('header', {
        isLogin,
        isRegister,
    });
    
    return (
        <header className={headerClass}>

            <Link to="/">
                <img className="header__img" src={logo} alt="" />
            </Link>
            
            <div className="header__menu">
                <div className="header__menu--profile">
                    
                    {
                        hasUser ?
                            <img src={gravatar(user.email)} alt={user.email}/>
                            :
                            <img src={userIcon} alt="User" />
                    }

                    <p>Perfil</p>
                    <ul>
                    
                    {
                        hasUser ?
                            <li><a href="/">{user.name}</a></li>
                        :
                        null
                    }

                    {
                        hasUser ?
                            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
                            :                      
                            <li>
                                <Link to="/login">
                                    Iniciar Sesión
                                </Link>
                            </li>
                            
                    }
                    
                    </ul>
                </div>
            </div>
        </header>
    )
};

Header.propTypes = {
    user: Proptypes.object,
    logoutRequest: Proptypes.func,
}

const mapStateToProps = state => {
    return {
        user:state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);