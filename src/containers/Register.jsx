import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section class="register">
            <section class="register__container">

                <h2>Regístrate</h2>

                <form class="register__container--form">
                    <input class="register__container--input" type="text" placeholder="Nombre"/>
                    <input class="register__container--input" type="text" placeholder="Correo"/>
                    <input class="register__container--input" type="password" placeholder="Contrasenia"/>
                    <button class="register__container--button">Registrarme</button>       

                </form>

                <div class="register__container--inicio-sesion">
                    <a href="">Iniciar Sesion</a>
                </div>

            </section>

    </section>
);

export default Register;