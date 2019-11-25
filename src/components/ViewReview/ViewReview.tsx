import React, { useState, useEffect } from "react";
import Desktop, { DesktopStep } from '../Desktop/Desktop';
import Service from "../../objects/Service";
import ReviewManager from '../../objects/ReviewManger';
import { ServiceStep } from '../../objects/StepManager';

import "./ViewReview.scss";
import ReviewA from './ReviewA/ReviewA';
import BackTitle from '../BackTitle/BackTitle';
import ReviewB from './ReviewB/ReviewB';


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
                view = <ReviewA />
                break;
            case 1:
                view = <ReviewB />
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