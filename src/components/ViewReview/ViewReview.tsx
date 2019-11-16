import React, { useState, useEffect } from "react";
import Desktop, { DesktopStep } from '../Desktop/Desktop';
import Service from "../../objects/Service";
import ReviewManager from '../../objects/ReviewManger';
import StepManager, { ServiceStep } from '../../objects/StepManager';

import "./ViewReview.scss";


interface IPropsViewReview {
    service: Service;
}

function ViewReview(props: IPropsViewReview) {

    var service = (props.service);
    var steps = (service.steps);
    var [step, setStep] = useState<ServiceStep>();
    var [review, setReview] = useState<ReviewManager>();
    const [update, setUpdate] = useState(false);


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
        setStep(stepData);

        if (stepData) {
            stepData.review.startReview();
            setReview(stepData.review);
        }
        setUpdate(!update);
    }, []);


    return <div className="ViewReview">
        <div className="ViewReview__navbar">
            <Desktop><h1 className="desktop__container__title__h1">Paso 1 : Solicitud para Servicio de Energía Eléctrica</h1>

                {review ?
                    review.reviews.map((reviewData, i) => {
                        return <DesktopStep key={i} review={reviewData} />
                    })
                    : ""}

            </Desktop>
        </div>
        <div className="ViewReview__information">
            {review ?
                review.currentReview === 0 ? <div>
                    <h1>First</h1>
                    <button onClick={next}>Next</button>
                </div> :
                    review.currentReview === 1 ? <div>
                        <h1>Second</h1>
                        <button onClick={next}>next</button>
                        <button onClick={back}>Back</button>
                    </div> : ""
                : "Review son null"}
        </div>

    </div>;
}

export default ViewReview;