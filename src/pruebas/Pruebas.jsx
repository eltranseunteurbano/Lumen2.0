import React from 'react';
import MenuUsuario from './MenuUsuario/MenuUsuario';
import CrearSolicitud from './CrearSolicitud/CrearSolicitud';

import './Pruebas.scss';

const Pruebas = () => {

    return(
        <section className="Pruebas">
            <MenuUsuario />
            <CrearSolicitud />
        </section>
    )
}

export default Pruebas;