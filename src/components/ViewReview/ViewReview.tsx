import React, { useState, useEffect } from "react";
import Desktop, { DesktopStep } from '../Desktop/Desktop';
import Service from "../../objects/Service";
import ReviewManager from '../../objects/ReviewManger';
import { ServiceStep } from '../../objects/StepManager';

import "./ViewReview.scss";


interface IPropsViewReview {
    service: Service;
}

function ViewReview(props: IPropsViewReview) {

    var service = props.service;
    var steps = service.steps;
    var reviwe
    var [review, setReview] = useState<ReviewManager>();
    const [update, setUpdate] = useState(false);

    var currentStep = steps.getCurrentStep();

    const next = () => {
        if (review) {
            review.next();
        }
        setUpdate(!update);
    };

    const back = () => {
        if (review) {
            review.back();
        }
        setUpdate(!update);
    };

    useEffect(() => {
        let stepData = steps.getCurrentStep();

        if (stepData) {
            stepData.review.startReview();
            setReview(stepData.review);
        }
        setUpdate(true);
    }, []);

    const chooseReview = () => {
        let view = <></>;
        console.log(steps.currentStep)
        switch (steps.currentStep) {
            case 0:
                view =
                    <div className="step1">
                        <div>
                            <h1>Paso 1 : Unidad San Joaquín</h1>
                        </div>
                        <div className="step1__container">
                            <div className="step1__container__card">
                                <div className="step1__container__card__icon">
                                    <img src="/img/icon/review/icon-user.png" alt="" />
                                </div>
                                <div className="step1__container__card__title">
                                    <h2>Información del Solicitante</h2>
                                </div>
                            </div>
                            <div className="step1__container__card">
                                <div className="step1__container__card__icon">
                                    <img src="/img/icon/review/icon-predio.png" alt="" />
                                </div>
                                <div className="step1__container__card__title">
                                    <h2>Información del Predio</h2>
                                </div>
                            </div>
                            <div className="step1__container__card">
                                <div className="step1__container__card__icon">
                                    <img src="/img/icon/review/icon-caracteristica.png" alt="" />
                                </div>
                                <div className="step1__container__card__title">
                                    <h2>Caracteristicas del Servicio</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                break;
        }
        return view;
    }


    return <div className="ViewReview">
        <div className="ViewReview__navbar">

        </div>
        <div className="ViewReview__information">
            {chooseReview()}

        </div>

    </div>;
}

export default ViewReview;