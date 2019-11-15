import React, { useState } from 'react';
import './WelcomeInformation.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


import * as Routes from '../../constants/Routes';
import UserContext from '../../hooks/UserContext';
import IconLumen from '../../icons/IconLumen/IconLumen';

const WelcomeInformation = () => {

    var useUser = React.useContext(UserContext);

  
    const [update, setUpdate] = useUser.updates.useState("update");

    const setType = (type: string) => {
        useUser.type = type;
        setUpdate(!update);
    }

    const renderFromuser = (user: string) => {
        switch (user) {
            case '':
                return (
                    <section className="WelcomeInformation appear">
                        <h1 className="WelcomeInformation__title">Bienvenido a</h1>

                        <div className="WelcomeInformation__img">
                            <IconLumen />
                        </div>

                        <p className="WelcomeInformation__description">La plataforma de CELSIA que te ayudará en el proyecto de servicio de energía.</p>

                        <div className="WelcomeInformation__footer">
                            <p className="WelcomeInformation__footer__description">Para empezar, dinos quién eres.</p>

                            <div className="WelcomeInformation__footer__btns">
                                <button type="button" onClick={() => setType('Cliente')}>Cliente</button>
                                <button type="button" onClick={() => setType('Asesor')}>Asesor</button>
                            </div>

                        </div>
                    </section>
                )

            case 'Cliente':
                return (
                    <section className="WelcomeInformation appear">
                        <div className="WelcomeInformation__icons">
                            <button type="button" className="WelcomeInformation__icons__item" onClick={() => setType("")}> <FontAwesomeIcon icon={faAngleLeft} /> </button>
                        </div>
                        <h1 className="WelcomeInformation__title">¡Bienvenido!</h1>

                        <p className="WelcomeInformation__description">Haz ingresado como <br /> <strong>Cliente Celsia</strong></p>

                        <div className="WelcomeInformation__login">
                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">¿Ya tienes cuenta?</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.LOGIN}>Iniciar Sesión</Link>
                            </div>

                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">De lo contrario</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.REGISTER}>Registrar</Link>
                            </div>
                        </div>
                    </section>
                )

            case 'Asesor':
                return (
                    <section className="WelcomeInformation appear">
                        <div className="WelcomeInformation__icons">
                            <button type="button" className="WelcomeInformation__icons__item" onClick={() => setType("")}> <FontAwesomeIcon icon={faAngleLeft} /> </button>
                        </div>
                        <h1 className="WelcomeInformation__title">¡Bienvenido!</h1>

                        <p className="WelcomeInformation__description">Haz ingresado como <br /> <strong>Asesor Celsia</strong></p>

                        <div className="WelcomeInformation__login">
                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">¿Ya tienes cuenta?</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.LOGIN}>Iniciar Sesión</Link>
                            </div>

                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">De lo contrario</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.REGISTER}>Registrar</Link>
                            </div>
                        </div>
                    </section>
                )

            default:
                return <div>No funciona</div>
        }
    }

    return (

        renderFromuser(useUser.type)
    )
}

export default WelcomeInformation;