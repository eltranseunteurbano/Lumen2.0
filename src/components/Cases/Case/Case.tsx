import React, { useContext } from 'react';
import Service from '../../../objects/Service/Service';
import './Case.scss';
import ServicesContext from '../../../hooks/ServicesContext';
import IconEmpresa from '../../../icons/Case/Empresa';
import IconHouse from '../../../icons/Case/House';
import IconConstructora from '../../../icons/Case/Constructora';
import IconLike from '../../../icons/Notifications/Like';
import Step from '../../Steps/Step/Step';
import UserContext from '../../../hooks/UserContext';
import { NameUser } from '../../../hooks/UserContext';

export interface IPropsCase {
    service: Service;
}

export const Case = (props: IPropsCase) => {

    const useUser = useContext(UserContext);
    const servicesManger = useContext(ServicesContext);

    var service = props.service;

    const [, setPage] = servicesManger.useState("page");

    const onClick = () => {
        setPage(1);
        servicesManger.setCurrentService(props.service);
    };

    const stepInfo = service.steps.steps[service.steps.currentStep != -1 ? service.steps.currentStep : 0];
    const information = stepInfo ? stepInfo.information : "Undefined";

    const chooseView = () => {
        let view = <></>;
        if (useUser.type === NameUser.Adviser) {
            view = <section onClick={onClick} className="CaseAdviser">
                <article className="CaseAdviser__container">
                    <article className="CaseAdviser__container__header">
                        <section className="CaseAdviser__container__header__information">
                            <h1 className="register">Numero de orden</h1>
                            <p className="order">Orden #{service.orden}</p>
                        </section>


                    </article>
                    <article className="CaseAdviser__container__information">
                        <article className="CaseAdviser__container__information__icon">
                            {service.information.TYPE === Case.empresa ? <>
                                <IconEmpresa />
                                <h2>Empresa</h2>
                            </> : ""}

                            {service.information.TYPE === Case.constructora ? <>
                                <IconConstructora />
                                <h2>Constructora</h2>
                            </> : ""}

                            {service.information.TYPE === Case.casa ? <>
                                <IconHouse />
                                <h2>Casa</h2>
                            </> : ""}

                        </article>
                        <article className="CaseAdviser__container__information__content">
                            <article className="CaseAdviser__container__information__content__item">
                                <h1>Nombre del proyecto</h1>
                                <h2>{service.information.NAME}</h2>
                            </article>
                            <article className="CaseAdviser__container__information__content__item step">
                                <h1>Paso actual</h1>
                                <h2>{information}</h2>
                            </article>
                        </article>
                    </article>

                </article>
            </section>;
        } else {
            view = <section onClick={onClick} className="Casetask">
                <article className="Casetask__container">
                    <article className="Casetask__container__header">
                        <section className="Casetask__container__header__information">
                            <p className="order">Orden #{service.orden}</p>
                            <h1 className="register">Bello Horiente</h1>
                        </section>

                        <article className="Casetask__container__header__icon">
                            {service.information.TYPE === Case.empresa ?
                                <IconEmpresa />
                                : ""}

                            {service.information.TYPE === Case.constructora ?
                                <IconConstructora />
                                : ""}

                            {service.information.TYPE === Case.casa ?
                                <IconHouse />
                                : ""}

                        </article>
                    </article>
                    <article className="Casetask__container__information">
                        <section className="Casetask__container__information__title">
                            <h2>1 de 5 pasos</h2>
                        </section>
                        <section className="Casetask__container__information__information">
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
            </section>;
        }
        return view;
    }

    return chooseView();
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