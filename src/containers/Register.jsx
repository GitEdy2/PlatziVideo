import React, { useState } from 'react';
// 1. Importar modulo para conectar el componente con el store
import { connect } from 'react-redux';
// 2. Importar las acciones a ejecutar en el store a través de este componente
import { registerRequest } from '../actions';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';

// 5. El componente ejecuta acciones contra el store, por tanto activo sus props
const Register = props => {
    // Declaro el estado inicial del componente (la propiedad form representa toda el formulario, por ello le paso un objeto con el valor de incio de cada uno de sus campos)
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    // Funcion controladora de evento que se dispara cuando uno de los campos de formulario cambia su valor. (onChange)
    const handleInput = event => {
        // Establezco el nuevo estado del componente segun los valores actuales de cada input, pero conservando los anteriores (destructuración)
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    // Función controladora de evento que se ejecuta tras dispararse el envio del formulario
    const handleSubmit = event => {
        event.preventDefault();
        // 6. Disparamos la acción registrar el usuario en el store
        props.registerRequest(form);
        // Redireccionar a otra ruta.
        props.history.push('/');
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

// 4. Establecer que acciones llevará a cabo este componente en el store
const mapDispatchToProps = {
    registerRequest,
};

// 3. Conectar el componente con el store
export default connect(null, mapDispatchToProps)(Register);