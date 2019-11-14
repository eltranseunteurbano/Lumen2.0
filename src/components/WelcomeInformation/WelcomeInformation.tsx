import React from 'react';
import './WelcomeInformation.scss';
import IconLumen from '../../Icons/IconLumen/IconLumen';
import PopUp from '../PopUp/PopUp';

const WelcomeInformation = () => {
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
                    <button type="button">Cliente</button>
                    <button type="button">Asesor</button>
                </div>

            </div>

        </section>
    )
}


export default WelcomeInformation;

