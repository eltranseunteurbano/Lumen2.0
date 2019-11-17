import React, { useContext } from 'react';
import Service from '../../../objects/Service';
import './Case.scss';
import ServicesContext from '../../../hooks/ServicesContext';
import IconEmpresa from '../../../icons/Case/Empresa';
import IconHouse from '../../../icons/Case/House';
import IconConstructora from '../../../icons/Case/Constructora';
import { on } from 'cluster';
import IconLike from '../../../icons/Notifications/Like';
import Step from '../../Steps/Step/Step';

export interface IPropsCase {
    title?: string;
    description?: string;
    type?: string;
    service: Service;
}

export const Case = (props: IPropsCase) => {

    const servicesManger = useContext(ServicesContext);

    var service = props.service;

    const [page, setPage] = servicesManger.useState("page");
    const [serviceG, setServiceG] = servicesManger.useState("service");

    const onClick = () => {
        setPage(1);
        servicesManger.setCurrentService(props.service);
        setServiceG(props.service);
    };

    return (
        <section onClick={onClick} className="Casetask__card">
            <article className="Casetask__card__container">
                <article className="Casetask__card__container__header">
                    <section className="Casetask__card__container__header__information">
                        <p className="order">Orden #{service.orden}</p>
                        <h1 className="register">Bello Horiente</h1>
                    </section>

                    <article className="Casetask__card__container__header__icon">
                        {service.information.TYPE === Case.empresa ? <>
                            <IconEmpresa />
                        </> : ""}

                        {service.information.TYPE === Case.constructora ? <>
                            <IconConstructora />
                        </> : ""}

                        {service.information.TYPE === Case.casa ? <>
                            <IconHouse />
                        </> : ""}

                    </article>
                </article>
                <article className="Casetask__card__container__information">
                    <section className="Casetask__card__container__information__title">
                        <h2>1 de 5 pasos</h2>
                    </section>
                    <section className="Casetask__card__container__information__information">
                        {service.steps.steps.map((step, i) => {
                            return <div key={i} className={`step${step.status == Step.complete ? " complete" : ""}`}>
                                <div className="step__status">
                                    <div className="step__status__icon ">
                                        <IconLike />
                                    </div>
                                </div>
                                <div className="step__information">{step.information}</div>
                            </div>
                        })}
                    </section>

                </article>

            </article>
        </section>
    )
}



export default Case;

Case.empresa = "Empresa";
Case.constructora = "Constructora";
Case.casa = "Casa";

Case.rural = "Rural";
Case.urbana = "Urbana";

Case.electrodomesticoA = "1";
Case.electrodomesticoB = "2";
Case.electrodomesticoC = "3";
Case.electrodomesticoD = "4";

Case.si = "true";
Case.no = "false";

Case.residencial = "Residencial";
Case.comercial = "Comercial";
Case.oficial = "Oficial";
Case.especial = "Especial";

Case.monofasica120 = "monofasica_120";
Case.monofasica240 = "monofasica_240";
Case.trifasica120 = "trifasica_120";
Case.trifasica240 = "trifasica_240";