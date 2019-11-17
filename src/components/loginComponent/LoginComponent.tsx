import React, { useContext, useState } from 'react';
import './LoginComponent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import * as Routes from '../../constants/Routes';
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../../hooks/UserContext';


const LoginComponent = () => {

    var useUser = useContext(UserContext);

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const singIn = () => {
        useUser.singIn(mail, password, () => {
            setRedirect(true);
        });
    }

    return (
        <section className="LoginComponent">
            {redirect ? <Redirect to={Routes.CASES} /> : ""}
            <div className="LoginComponent__icons">
                <Link to={Routes.INDEX} className="LoginComponent__icons__item" > <FontAwesomeIcon icon={faAngleLeft} /> </Link>
            </div>
            <h1 className="LoginComponent__title">Iniciar Sesión</h1>
            <p className="LoginComponent__subtitle">Antes de empezar, digita tus datos</p>

            <div className="LoginComponent__login">
                <label className="LoginComponent__login__label">
                    <p className="LoginComponent__login__label__text">Email empresarial</p>
                    <input onChange={(e) => { setMail(e.target.value) }} className="LoginComponent__login__label__input" type="email" name="emailasesor" autoComplete="true" autoSave="true" autoFocus placeholder="email@empresa.com" />
                </label>

                <label className="LoginComponent__login__label">
                    <p className="LoginComponent__login__label__text">Contraseña</p>
                    <input onChange={(e) => { setPassword(e.target.value) }} className="LoginComponent__login__label__input" type="password" name="passwordasesor" autoComplete="true" autoSave="true" autoFocus placeholder="••••••" />
                </label>

                <Link className="LoginComponent__login__password" to={Routes.LOGIN} >¿Olvidaste tu contraseña?</Link>

                <button onClick={singIn} type="button" className="LoginComponent__login__btn">Iniciar sesión</button>
            </div>
        </section >
    )
}

export default LoginComponent;