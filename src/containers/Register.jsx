import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {
    
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }

    return (
    <section className="register">
            <section className="register__container">

                <h2>Regístrate</h2>

                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name" 
                        className="register__container--input" 
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput}
                    />

                    <input
                        name="email" 
                        className="register__container--input" 
                        type="text" 
                        placeholder="Email"
                        onChange={handleInput}
                    />

                    <input
                        name="password" 
                        className="register__container--input" 
                        type="password" 
                        placeholder="Password"
                        onChange={handleInput}
                    />

                    <button className="register__container--button">Registrarme</button>       

                </form>

                <div className="register__container--inicio-sesion">
                    <Link to="/login">
                        Iniciar Sesion
                    </Link>
                </div>

            </section>

    </section>
    )
};


export default connect(null, null)(Register);