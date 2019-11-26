import React, { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Service from "../../../objects/Service/Service";

import ServicesContext from "../../../hooks/ServicesContext";
import { ServiceStep } from '../../../objects/Service/StepManager';

import "./Step.scss";
import IconLike from '../../../icons/Notifications/Like';
import UserContext from "../../../hooks/UserContext";
import CasesManager from '../../../containers/CasesManager/CasesManager';
import { NameUser } from '../../../hooks/UserContext';

interface IPropsStep {
    progress?: number;
    step: ServiceStep;
    order: number;
    service: Service;
}

export function Step(props: IPropsStep) {

    const useUser = useContext(UserContext);
    const servicesManager = useContext(ServicesContext);

    var step = props.step;


    const [, setPage] = servicesManager.useState("page");

    const onClick = () => {
        let serviceCurrent = servicesManager.currentService;
        if(serviceCurrent){
          
            if (useUser.type === NameUser.Adviser && (props.order -1) <= serviceCurrent.steps.currentStep) {
                if (servicesManager.currentService) {
                    servicesManager.currentService.steps.setCurrentStep(props.order - 1);
                }
                setPage(CasesManager.REVIEW);
            }
        }
    };

    const IconStepInformation = (step: number) => {
        let view = <></>;
        switch (step) {
            case 1:
                view = < img src="/img/steps/icon-lupa-user.png" alt="icono lupa" />
                break;
            case 2:
                view = <img src="/img/steps/icon-send.png" alt="icono enviar" />
                break;
            case 3:
                view = <img src="/img/steps/icon-404.png" alt="icono 404" />
                break;
            case 4:
                view = <img src="/img/steps/icon-location.png" alt="icono location" />
                break;
            case 5:
                view = <img src="/img/steps/icon-document.png" alt="icono documento" />
                break;
        }
        return view;
    }

    const IconStepStatus = (status: number) => {
        let view = <></>;
        switch (status) {
            case Step.disebled:
                view = <div style={{ color: "black" }}>DES</div>
                break;
            case Step.progress:
                view = <FontAwesomeIcon icon={faSpinner} className='Step__container__check__progress__iconProgress' />
                break;
            case Step.complete:
                view = <IconLike />
                break;
            case Step.denegada:
                view = <p>!</p>;
                break;
        }
        return view;
    }

    const getClassNameStatus = (status: number) => {
        let className = "";
        switch (status) {
            case Step.disebled:
                className = "disabled"
                break;
            case Step.progress:
                className = "progress"
                break;
            case Step.complete:
                className = "complete"
                break;
            case Step.denegada:
                className = "denied"
                break;
        }
        return className;
    }


    return <article onClick={onClick} className={`Step ${getClassNameStatus(step.status)}`}>
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
                    {IconStepInformation(props.order)}
                </section>
            </article>
            <hr className="Step__container__line" />
            <article className="Step__container__check">
                <article className="Step__container__check__progress">
                    {IconStepStatus(step.status)}
                </article>
                <article className="Step__container__check__view"></article>
            </article>
        </section>
    </article>;
}

export default Step;

Step.disebled = 0;
Step.progress = 1;
Step.complete = 2;
Step.denegada = -1;


Step.first = "Paso 1";
Step.second = "Paso 2";
Step.third = "Paso 3";
Step.four = "Paso 4";
Step.five = "Paso 5";