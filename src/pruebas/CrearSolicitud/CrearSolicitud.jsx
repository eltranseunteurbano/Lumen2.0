import React from 'react';
import './CrearSolicitud.scss';
import HeaderSolicitud from './HeaderSolicitud/HeaderSolicitud';

const CrearSolicitud = () => {
    return(
        <section className="CrearSolicitud">

            <HeaderSolicitud />

            <article className="CrearSolicitud__pregunta">
                <div className="CrearSolicitud__pregunta__texto">
                    <p className="CrearSolicitud__pregunta__texto__txt">
                        <strong>1. </strong> El servicio de energía es para:
                    </p>
                </div>
                
                <div className="CrearSolicitud__pregunta__opciones">
                    
                    <div className="CrearSolicitud__pregunta__opciones__opcion">
                        <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                            <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-empresa.png'} alt="Icono"/>
                        </div>
                        <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Empresa</p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones__opcion">
                        <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                            <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono"/>
                        </div>
                        <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Casa</p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones__opcion">
                        <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                            <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-constructora.png'} alt="Icono"/>
                        </div>
                        <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Constructora</p>
                    </div>
                </div>
                
                <div className="CrearSolicitud__pregunta__btns">
                    <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                    <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                </div>
            </article>
        </section>
    )
}

export default CrearSolicitud;