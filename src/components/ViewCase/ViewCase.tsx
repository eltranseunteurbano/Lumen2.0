import React, { useState, useEffect } from "react";

import "./ViewCase.scss";
import Case from '../Cases/Case/Case';
import Steps from "../Steps/Steps/Steps";
import ProgressBar from "../ProgressBar/ProgressBar";
import Servicio from '../../objects/Service';
import MenuCase from "../MenuCase/MenuCase";
import IconEmpresa from "../../icons/Case/Empresa";
import IconConstructora from '../../icons/Case/Constructora';
import IconHouse from "../../icons/Case/House";
import IconLupa from '../../icons/Case/Lupa';

interface IPropsViewCase {
    service: Servicio;
}

export function ViewCase(props: IPropsViewCase) {

    const [service, setService] = useState(props.service);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        service.steps.startStep();
        service.history.addHistroy();
        setService(service);
        setStatus(1);
    }, [])

    return <div className="ViewCase">
        <section className="ViewCase__container">
            <article className="ViewCase__container__navegation">
                <section className="ViewCase__container__navegation__back">
                    <button>Atras</button>
                </section>
                <section className="ViewCase__container__navegation__title">
                    <h1>Pasos proyecto de solicitud de servicio de energía</h1>
                    <h2>Orden #{props.service.orden}</h2>
                </section>
                <section className="ViewCase__container__navegation__next">
                   
                </section>
                <section className="ViewCase__container__navegation__exit">
                   
                </section>
            </article>
            <hr />
            <article className="ViewCase__container__title">
                <section className="ViewCase__container__title__place">
                    <section className="ViewCase__container__title__place__icon">
                        <section className="ViewCase__container__title__place__icon__svg">
                            <article className="ViewCase__container__title__place__icon__svg__image">
                                {props.service.type === Case.empresa ?
                                   <IconEmpresa />

                                    : props.service.type === Case.constructora ?
                                        <IconConstructora />

                                        : props.service.type === Case.casa ?
                                            <IconHouse />
                                            : ""}
                            </article>
                            <article className="ViewCase__container__title__place__icon__svg__title">
                                {props.service.type === Case.empresa ?
                                    <h2>Empresa</h2>
                                    : props.service.type === Case.constructora ?
                                        <h2>Construtora</h2>
                                        : props.service.type === Case.casa ?
                                            <h2>Casa</h2>
                                            : ""}
                            </article>
                        </section>

                    </section>
                    <section className="ViewCase__container__title__place__place">
                        <h1>Unidad San Joaquin</h1>
                    </section>
                </section>
                <section className="ViewCase__container__title__date">
                    <article className="ViewCase__container__title__date__container">
                        <h1>Nombre de usuario</h1>
                        <h2>ha editado un elemento</h2>
                        <IconLupa />
                        <div>{`${props.service.date.day}/${props.service.date.month}/${props.service.date.year}`}</div>
                    </article>

                </section>
            </article>
            <hr />

            <ProgressBar value={service.steps.currentStep +1} />

            <article className="ViewCase__container__steps">
                <Steps service={props.service}></Steps>
            </article>
        </section>

    </div>;
}