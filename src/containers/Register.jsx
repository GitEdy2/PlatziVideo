import React from 'react';

const Register = () => (
<section class="register">
        <section class="register__container">

            <h2>Regístrate</h2>

            <form class="register__container--form">
                <input class="input" type="text" placeholder="Nombre"/>
                <input class="input" type="text" placeholder="Correo"/>
                <input class="input" type="password" placeholder="Contrasenia"/>
                <button class="button">Registrarme</button>       

            </form>

            <div class="register__container--inicio-sesion">
                <a href="">Iniciar Sesion</a>
            </div>

        </section>

    </section>
);

export default Register;