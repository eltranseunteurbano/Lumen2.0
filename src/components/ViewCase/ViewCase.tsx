import React, { useEffect, useContext } from "react";

import "./ViewCase.scss";
import Case from '../Cases/Case/Case';
import Steps from "../Steps/Steps/Steps";
import ProgressBar from "../ProgressBar/ProgressBar";
import Servicio from '../../objects/Service/Service';
import IconEmpresa from "../../icons/Case/Empresa";
import IconConstructora from '../../icons/Case/Constructora';
import IconHouse from "../../icons/Case/House";
import IconLupa from '../../icons/Case/Lupa';
import UserContext from "../../hooks/UserContext";
import { NameUser } from '../../hooks/UserContext';

interface IPropsViewCase {
    service: Servicio;
}

export function ViewCase(props: IPropsViewCase) {

    const useUser = useContext(UserContext);
    var { steps, history, orden, information, date } = props.service;


    useEffect(() => {
        if (useUser.user && useUser.user.type === NameUser.Adviser) {
            steps.startStep();
            history.addHistroy();
        }
    }, []);

    

    const chooseIcon = (type: string) => {
        let view = <></>;
        switch (type) {
            case Case.empresa:
                view = < IconEmpresa />
                break;
            case Case.constructora:
                view = < IconConstructora />
                break;
            case Case.casa:
                view = < IconHouse />
                break;
        }
        return view;
    }

    return <div className="ViewCase">
        <section className="ViewCase__container">
            <article className="ViewCase__container__navegation">
                <article className="ViewCase__container__navegation__container">
                    <section className="ViewCase__container__navegation__container__back">
                        {chooseIcon(information.TYPE)}
                    </section>
                    <section className="ViewCase__container__navegation__container__title">
                        <h1>Estado del proyecto de servicio de energía de <span>Orden #{orden}</span></h1>
                    </section>
                    <section className="ViewCase__container__navegation__container__next">

                    </section>
                    <section className="ViewCase__container__navegation__container__exit">

                    </section>
                </article>
            </article>
            <hr />
            <article className="ViewCase__container__progress">
                <section className="ViewCase__container__progress__container">
                    <h2>{steps.currentStep + 1} de 5 pasos</h2>
                    <ProgressBar className="ViewCase__container__progress__bar" value={steps.currentStep + 1} max={5} />
                </section>
            </article>





            <article className="ViewCase__container__steps">
                <Steps service={props.service}></Steps>
            </article>
        </section>

    </div>;
}