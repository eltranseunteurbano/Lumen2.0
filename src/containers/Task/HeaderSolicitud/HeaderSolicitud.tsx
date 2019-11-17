import React from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';

interface IPropsHeaderSolicitud {
    step: number;
}

const HeaderSolicitud = (props:IPropsHeaderSolicitud) => {

    return (
        <article className="CrearSolicitud__header">
            <div className="CrearSolicitud__header__titulo">
                <div className="CrearSolicitud__header__titulo__img">
                    <img src={process.env.PUBLIC_URL + '/img/steps/icon-lupa-user.png'} alt="Icono" />
                </div>
                <div className="CrearSolicitud__header__titulo__txt">
                    <p><strong>Paso {props.step} </strong> </p>
                    <p className="CrearSolicitud__header__titulo__txt">Solicitud para servicio de energía eléctrica.</p>
                </div>
            </div>

            <div className="CrearSolicitud__header__progress">
                <p className="CrearSolicitud__header__progress__txt">{props.step} de 9 preguntas</p>
                <ProgressBar value={props.step} max={9} />
            </div>
        </article>
    )
}

export default HeaderSolicitud;