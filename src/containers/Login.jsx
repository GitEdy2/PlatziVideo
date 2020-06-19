import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import gooogleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';


const Login = () => {
    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>

                    <input
                        name="email" 
                        className="login__container--input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />

                    <input
                        name="password" 
                        className="login__container--input" 
                        type="password" 
                        placeholder="Password"
                        onChange={handleInput}
                    />

                    <button className="login__container--button">Iniciar sesión</button>

                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
            <section className="login__container--social-media">
                <div><img src={gooogleIcon}/> Inicia sesión con Google</div>
                <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
            </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta
                    <Link to="/register">
                        Regístrate
                    </Link> 
                </p>
            </section>
        </section>
    )
};

export default Login;