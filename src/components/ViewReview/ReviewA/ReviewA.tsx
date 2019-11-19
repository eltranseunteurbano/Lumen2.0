import React, { useState, useContext } from 'react';

import "./ReviewA.scss";
import HookUpdateManager from '../../../objects/HookUpdate';
import BackTitle from '../../BackTitle/BackTitle';

import ServicesContext from '../../../hooks/ServicesContext';
import Service from '../../../objects/Service';
import Client from '../../../objects/User/Client';


interface IPropsReviewA { }

const ReviewA = (props: IPropsReviewA) => {

    const serviceManager = useContext(ServicesContext);
    const [navegator] = useState(new HookUpdateManager())
    const [page, setPage, , pageBack] = navegator.useState("page", useState(0), true);
    const [, setPageG, , pageBackG] = serviceManager.useState("page");

    var currentService = serviceManager.getCurrentService();
    var service = currentService ? currentService : new Service();
    var user = service.user || new Client();

    const choosePage = () => {
        let view = <></>;
        switch (page) {
            case 0:
                view =
                    <div className="step1">
                        <div>
                            <h1>Paso 1 : Unidad San Joaquín</h1>
                        </div>
                        <div className="step1__container">
                            <div onClick={() => { setPage(1) }} className="step1__container__card">
                                <div className="step1__container__card__icon">
                                    <img src="/img/icon/review/icon-user.png" alt="" />
                                </div>
                                <div className="step1__container__card__title">
                                    <h2>Información del Solicitante</h2>
                                </div>
                            </div>
                            <div onClick={() => { setPage(2) }} className="step1__container__card">
                                <div className="step1__container__card__icon">
                                    <img src="/img/icon/review/icon-predio.png" alt="" />
                                </div>
                                <div className="step1__container__card__title">
                                    <h2>Información del Predio</h2>
                                </div>
                            </div>
                            <div onClick={() => { setPage(3) }} className="step1__container__card">
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
            case 1:
                view = <div>
                    <div>Información del Solicitante</div>
                    <h2>Nombre</h2>
                    {user.name}
                    <h2>Direccion</h2>
                    {service.information.PROPERTY.ADDRESS}
                </div>
                break;
            case 2:
                view = <div>Información del Predio</div>
                break;
            case 3:
                view = <div>Caracteristicas del Servicio</div>
                break;
        }
        return view;
    }

    const back = () => {
        if (page === 0) {
            setPageG(pageBackG());
        } else {
            setPage(pageBack());
        }
    }

    return <div className="ReviewA">
        <BackTitle onClick={back} />
        {choosePage()}
    </div>
}

export default ReviewA;