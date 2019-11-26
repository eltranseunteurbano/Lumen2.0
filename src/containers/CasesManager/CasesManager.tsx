import React, { useState, useContext, useEffect } from "react";
import ServicesContext from "../../hooks/ServicesContext";
import Cases from '../../components/Cases/Cases/Cases';
import { ViewCase } from "../../components/ViewCase/ViewCase";
import ViewReview from "../../components/ViewReview/ViewReview";
import MenuCase from '../../components/MenuCase/MenuCase';
import BarTitle from '../../components/BarTitle/BarTitle';
import Task from '../Task/Task';
import Notificaciones from '../Notificaciones/Notificaciones';

import "./CasesManager.scss";
import ViewNotificacion from '../../components/ViewNotificacion/ViewNotificacion';

interface IPropsCasesManager { }

export function CasesManager(props: IPropsCasesManager) {

    var servicesManager = useContext(ServicesContext);

    const [page, setPage, pageVal] = servicesManager.useState<number>("page", useState(0), true);
    const [, setUpdate, updateValue] = servicesManager.useState<boolean>("updateServices", useState(false));

    var currentCase = servicesManager.currentService;
    var currentNotification = servicesManager.currentNotificacion;

    useEffect(() => {

        servicesManager.getAllServices(() => {
            if (servicesManager.services.length <= 0) {
                setPage(CasesManager.TASK);
            }
            setUpdate(!updateValue());
        });

        servicesManager.getAllNotifications(() => {
            setUpdate(!updateValue());
        });

    }, []);

    const choosePage = (numero: number) => {
        let view = <></>;
        switch (numero) {
            case CasesManager.PROYECTS:
                view = <Cases />;
                break;
            case CasesManager.CASE:
                if (currentCase)
                    view = <ViewCase service={currentCase} />;
                break;
            case CasesManager.REVIEW:
                if (currentCase)
                    view = <ViewReview service={currentCase} />;
                break;
            case CasesManager.NOTIFICATIONS:
                view = <Notificaciones />
                break;
            case CasesManager.NOTIFICATION:
                view = <ViewNotificacion notification={currentNotification} />
                break;
            case CasesManager.TASK:
                view = <Task />
                break;

        }

        return view;
    }

    return <div className="CasesManager">

        <BarTitle />

        <div className="CasesManager__menu">
            <MenuCase />
        </div>

        <div className="CasesManager__information">
            {choosePage(pageVal())}
        </div>


    </div>
}

export default CasesManager;

CasesManager.PROYECTS = 0;
CasesManager.CASE = 1;
CasesManager.REVIEW = 2;
CasesManager.NOTIFICATIONS = 3;
CasesManager.NOTIFICATION = 5;
CasesManager.TASK = 4;

