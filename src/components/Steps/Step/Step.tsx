import React, { useRef, useEffect, useContext } from "react";

import Service from "../../../objects/Service";

import ServicesContext from "../../../hooks/ServicesContext";
import { ServiceStep } from '../../../objects/StepManager';

import "./Step.scss";
import IconLike from '../../../icons/Notifications/Like';

interface IPropsStep {
    progress?: number;
    step: ServiceStep;
    order: number;
    service: Service;
}

export function Step(props: IPropsStep) {

    const servicesManager = useContext(ServicesContext);

    const step = props.step;
    const [page, setPage] = servicesManager.useState("page");

    const progress: any = useRef<any>();

    const onClick = () => {
        if (servicesManager.currentService) {

            servicesManager.currentService.steps.setCurrentStep(props.order - 1);
        }

        setPage(2);
    };

    useEffect(() => {
        setFill(progress, "white");
    }, [props.progress])

    return <article onClick={onClick} className={`Step ${step.status === 0 ? "disabled" : step.status === 1 ? "progress" : ""}`}>
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
                        <IconLike />
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

Step.diseabled = 0;
Step.progress = 0;


Step.first = "Paso 1";
Step.second = "Paso 2";
Step.third = "Paso 3";
Step.four = "Paso 4";
Step.five = "Paso 5";