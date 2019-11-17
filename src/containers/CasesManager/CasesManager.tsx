import React, { useState, useContext } from "react";
import ServicesContext from "../../hooks/ServicesContext";
import Service from '../../objects/Service';
import Cases from '../../components/Cases/Cases/Cases';
import { ViewCase } from "../../components/ViewCase/ViewCase";
import ViewReview from "../../components/ViewReview/ViewReview";
import MenuCase from '../../components/MenuCase/MenuCase';

import "./CasesManager.scss";
import BarTitle from '../../components/BarTitle/BarTitle';
import Task from '../Task/Task';


interface IPropsCasesManager { }


export function CasesManager(props: IPropsCasesManager) {

    const servicesManager = useContext(ServicesContext);

    const [page, setPage] = servicesManager.useState<number>("page", useState(3));
    const [currentCase, setCurrentCase] = servicesManager.useState<Service>("service", useState(new Service()));

    const choosePage = (numero: number) => {
        let view = <></>;
        switch (numero) {
            case CasesManager.PROYECTS:
                view = <Cases update={setCurrentCase} updatePage={setPage} />;
                break;
            case CasesManager.CASE:
                view = <ViewCase service={currentCase} />;
                break;
            case CasesManager.REVIEW:
                view = <ViewReview service={currentCase} />;
                break;
            case CasesManager.NOTIFICATIONS:
                view = <Task />
                break;
        }

        return view;
    }

    return <div className="CasesManager">

        <BarTitle />

        <div className="CasesManager__menu">
            <MenuCase setPage={setPage} />
        </div>

        <div className="CasesManager__information">
            {choosePage(page)}
        </div>


    </div>
}

export default CasesManager;

CasesManager.PROYECTS = 0;
CasesManager.CASE = 1;
CasesManager.REVIEW = 2;
CasesManager.NOTIFICATIONS = 3;

