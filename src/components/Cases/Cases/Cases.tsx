import React, { useContext, useEffect, useState } from 'react';
import Case from '../../Cases/Case/Case';
import ServicesContext from '../../../hooks/ServicesContext';

import './Cases.scss';
import Service from '../../../objects/Service';

interface IPropsCases {
    update: Function;
    updatePage: Function;
}

export const Cases = (props: IPropsCases) => {

    const servicesManager = useContext(ServicesContext);
    const [services, setServices] = useState<Service[]>([]);


    useEffect(() => {
        servicesManager.updates.addUpdate("services", services, setServices);

        servicesManager.getAllServices((servicesData: Service[]) => {
            setServices(servicesData);
        });

    }, []);



    return (
        <section className="Cases">
            {/** <article className="Cases__header">
                <ControlHeader />
            </article> */}
            <article className="Cases__title">
                <div>
                    <h1 className="Cases__title__h1">Órdenes</h1>
                    <h2 className="Cases__title__description">Estos son los proyectos de servicio en ejecución</h2>
                </div>
                <div>
                    <select name="" id="">
                        <option>Mas recientes</option>
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