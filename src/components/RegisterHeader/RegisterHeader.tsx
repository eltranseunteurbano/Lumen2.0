import React from 'react';
import './RegisterHeader.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

interface IPropsRegisterHeader {
    step: number;
}

const RegisterHeader = (props: IPropsRegisterHeader) => {

    return (
        <header className="RegisterHeader">

            <div className="RegisterHeader__header">
                <h1 className="RegisterHeader__header__title">Registrarse</h1>
                <p className="RegisterHeader__header__steps"> Paso {props.step} de 3</p>
                <ProgressBar max={3} value={props.step} className="RegisterHeader__header__progress" />
            </div>

        </header>
    )
}

export default RegisterHeader;

