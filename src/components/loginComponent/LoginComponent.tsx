import React from 'react';
import './LoginComponent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import * as Routes from'../../constants/Routes';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return(
        <section className="LoginComponent">
            <div className="LoginComponent__icons">
                <button type="button" className="LoginComponent__icons__item" onClick={ () => console.log('atras')}> <FontAwesomeIcon icon={faAngleLeft} /> </button>
            </div>
            <h1 className="LoginComponent__title">Iniciar Sesión</h1>
            <p className="LoginComponent__subtitle">Antes de empezar, digita tus datos</p>

            <div className="LoginComponent__login">
                <label className="LoginComponent__login__label">
                    <p className="LoginComponent__login__label__text">Email empresarial</p>
                    <input className="LoginComponent__login__label__input" type="email" name="emailasesor" autoComplete="true" autoSave="true" autoFocus placeholder="email@empresa.com" />
                </label>

                <label className="LoginComponent__login__label">
                    <p className="LoginComponent__login__label__text">Contraseña</p>
                    <input className="LoginComponent__login__label__input" type="password" name="passwordasesor" autoComplete="true" autoSave="true" autoFocus placeholder="••••••"/>
                </label>

                <Link className="LoginComponent__login__password" to={Routes.LOGIN} >¿Olvidaste tu contraseña?</Link>

                <button type="button" className="LoginComponent__login__btn">Iniciar sesión</button>
            </div>
        </section>
    )
}

export default LoginComponent;