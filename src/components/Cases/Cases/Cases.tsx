import React, { useContext, useEffect, useState } from 'react';
import Case from '../../Cases/Case/Case';
import ServicesContext from '../../../hooks/ServicesContext';

import Service from '../../../objects/Service';
import './Cases.scss';
import UserContext from '../../../hooks/UserContext';

interface IPropsCases {

}

export const Cases = (props: IPropsCases) => {

    const useUser = useContext(UserContext);
    var servicesManager = useContext(ServicesContext);

    var services = servicesManager.services;
    console.log(servicesManager.services)

    return (
        <section className="Cases">

            <article className="Cases__header">
                <div className="Cases__header__title">
                    <h1 className="Cases__header__title__h1">Mis proyectos</h1>
                    <h2 className="Cases__header__title__description">Estos son los proyectos de servicio de energía que has creado a través de LUMEN.</h2>
                </div>
                <div className="Cases__header__space">
                    <div className="Cases__header__space__line"></div>
                </div>
                <div className="Cases__header__filters">
                    <select className="Cases__header__filters__select" name="" id="">
                        <option className="Cases__header__filters__select__option">Mas recientes</option>
                        <option>Menos recientes</option>
                    </select>
                </div>
            </article>
            <article className="Cases__admin scrollview">
                <section className="Cases__admin__container">
                    {services.length === 0 ? <h1>No se encontraron casos</h1>
                        : services.map((service, i) => {
                            return <Case key={i} service={service} />
                        })
                    }
                </section>
            </article>
        </section>
    )
}

export default Cases;