import React from 'react';
import MenuUsuario from './MenuUsuario/MenuUsuario';
import CrearSolicitud from './CrearSolicitud/CrearSolicitud';
import Notificaciones from './Notificaciones/Notificaciones';

import './Pruebas.scss';

const Pruebas = () => {

    return(
        <section className="Pruebas">
            <MenuUsuario />
            <Notificaciones />
        </section>
    )
}

export default Pruebas;