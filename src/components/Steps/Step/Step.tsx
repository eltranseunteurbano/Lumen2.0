import React, { useRef, useEffect, useState, useContext } from "react";

import Service from "../../../objects/Service";

import ServicesContext from "../../../hooks/ServicesContext";
import { ServiceStep } from '../../../objects/StepManager';

import "./Step.scss";

interface IPropsStep {
    progress?: number;
    step: ServiceStep;
    order: number;
    service: Service;
}

export function Step(props: IPropsStep) {

    const servicesManager = useContext(ServicesContext);

    const [step, setStep] = useState(props.step);
    const [page, setPage] = servicesManager.useState("page");

    const progress: any = useRef<any>();

    const onClick = () => {
        if (servicesManager.currentService) {
            console.log("Cargando el numero", props.order - 1);
            servicesManager.currentService.steps.setCurrentStep(props.order - 1);
        }

        setPage(2);
    };

    useEffect(() => {
        setFill(progress, "white");
    }, [props.progress])

    return <article onClick={onClick} className={`Step ${step.status === 0 ? "Step__disabled" : step.status === 1 ? "Step__progress" : ""}`}>
        <section className="Step__container">
            <article className="Step__container__title">
                <h1>Paso {props.order}:</h1>
            </article>
            <hr className="Step__container__line" />
            <article className="Step__container__info">
                <section className="Step__container__info__title">
                    <h2>{step.information}</h2>
                </section>
                <section className="Step__container__info__icon">
                    {props.order === 1 ?
                        <img src="/img/steps/icon-lupa-user.png" alt="" /> :
                        props.order === 2 ?
                            <img src="/img/steps/icon-send.png" alt="" /> :
                            props.order === 3 ?
                                <img src="/img/steps/icon-404.png" alt="" /> :
                                props.order === 4 ?
                                    <img src="/img/steps/icon-location.png" alt="" /> :
                                    props.order === 5 ?
                                        <img src="/img/steps/icon-document.png" alt="" /> : ""
                    }

                </section>
            </article>
            <hr className="Step__container__line" />
            <article className="Step__container__check">
                <article className="Step__container__check__progress">

                    {step.status === 0 ?
                        <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4219 3.38567L28.6143 0.577982C28.2293 0.192709 27.7611 0 27.2107 0C26.6598 0 26.1916 0.192709 25.8066 0.577982L12.2632 14.1419L6.19351 8.05147C5.80809 7.66605 5.34017 7.47356 4.78981 7.47356C4.23909 7.47356 3.77116 7.66605 3.38575 8.05147L0.578054 10.8592C0.192636 11.2446 0 11.7126 0 12.2633C0 12.8135 0.192636 13.282 0.578054 13.6673L8.05147 21.1406L10.8594 23.9482C11.2446 24.3338 11.7126 24.5263 12.2632 24.5263C12.8136 24.5263 13.2816 24.3333 13.6671 23.9482L16.4749 21.1406L31.4219 6.19358C31.807 5.80816 32 5.34017 32 4.78952C32.0003 4.23916 31.807 3.77109 31.4219 3.38567Z" fill="#D2D5D8" />
                        </svg>
                        :
                        "Icono"
                    }

                </article>
                <article className="Step__container__check__view"></article>
            </article>
        </section>
    </article>;
}

function setFill(ref: any, value: string) {
    if (ref.current) {
        let container: any = ref.current.options.container.querySelector("path");
        let path: SVGClipPathElement = container;
        path.style.fill = value;
    }
}

export default Step;


Step.first = "Paso 1";
Step.second = "Paso 2";
Step.third = "Paso 3";
Step.four = "Paso 4";
Step.five = "Paso 5";