import React from "react";
import Service from '../../../objects/Service/Service';
import Step from "../Step/Step";

import "./Steps.scss"
import PopUp from '../../PopUp/PopUp';


interface IPropsSteps {
    service: Service;
}

export function Steps(props: IPropsSteps) {

    var service = props.service;

    return <section className="Steps">
        <section className="Steps__container">
            {service.steps.steps.map((step, i) => {
                return <Step key={i} order={i + 1} step={step} service={service} />

            })}
        </section>
            <PopUp visible={(service.steps.complete === true)} close={true}>Completado</PopUp>
    </section>;
}

export default Steps;