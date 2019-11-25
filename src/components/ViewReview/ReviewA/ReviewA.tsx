import React, { useState, useContext } from 'react';

import "./ReviewA.scss";
import HookUpdateManager from '../../../objects/HookUpdate';
import BackTitle from '../../BackTitle/BackTitle';

import ServicesContext from '../../../hooks/ServicesContext';
import Service from '../../../objects/Service';
import Client from '../../../objects/User/Client';
import IconOffice from '../icon/IconOffice';
import IconLocalitation from '../icon/IconLocalitation';
import IconSend from '../icon/IconSend';
import IconBarrio from '../icon/IconBarrio';
import IconQuestion from '../icon/IconQuestion';
import IconConfig from '../icon/IconConfig';
import IconVoltage from '../icon/IconVoltage';
import IconTornillo from '../icon/IconTornillo';
import IconLlave from '../icon/IconLlave';
import IconFirma from '../icon/IconFirma';


interface IPropsReviewA { }

const ReviewA = (props: IPropsReviewA) => {

    const serviceManager = useContext(ServicesContext);
    const [navegator] = useState(new HookUpdateManager())
    const [page, setPage, , pageBack] = navegator.useState("page", useState(0), true);
    const [, setPageG, , pageBackG] = serviceManager.useState("page");

    var currentService = serviceManager.getCurrentService();
    var service = currentService ? currentService : new Service();
    var user = service.user || new Client();

    var { FIRM, PROPIETY_CEDULA_DOC, CADASTRAL_NUMBER_DOC } = service.fileRoute || service.generateDefaulFileRoutes();




    const choosePage = () => {
        let view = <></>;
        switch (page) {
            case 0:
                view =
                    <div className="step1">

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
                view =
                    <section className="ReviewA__card">
                        <article className="ReviewA__card__container">

                            <ItemViewReview
                                title="Número Catastral:"
                                description="2906432YK5320N001QMP2"
                                icon={0} />
                            <ItemViewReview
                                title="Dirección:"
                                description="Calle25 # 02-53"
                                icon={1} />
                            <ItemViewReview
                                title="Municipio:"
                                description="Palmira, Valle del Cauca"
                                icon={2} />
                            <ItemViewReview
                                title="Dirección de envío de factura:"
                                description="Calle 25 # 02-53"
                                icon={3} />

                            <ItemViewReview
                                title="Barrio:"
                                description="Rincón Del Bosque"
                                icon={4} />
                            <ItemViewReview
                                title="Estrato asignado:"
                                description="3"
                                icon={5} />



                            <h2>Nombre</h2>
                            {user.name}
                            <h2>Direccion</h2>
                            {service.information.PROPERTY.ADDRESS}
                        </article>
                    </section>
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

    const next = () => {
        setPage(page + 1);
    }

    const returnTitlePage = () => {
        var title = "";
        switch (page) {
            case 0:
                title = "Solicitud para Servicio de Energía Electrica:";
                break;
            case 1:
                title = "1. Información del solicitante";
                break;
            case 2:
                title = "2. Información del Predio";
                break;
            case 3:
                title = "3. Características del Servicio";
                break;
        }
        return title;
    }

    return <div className="ReviewA">
        <BackTitle onClick={back} />
        <div className="ReviewA__header">
            <section className="ReviewA__header__title">
                <h1>Paso 1 : Unidad San Joaquín</h1>
            </section>
            <section className="ReviewA__header__info">
                <h2>{returnTitlePage()}</h2>
                <h2><span>Orden #</span>{service.orden}</h2>
            </section>
        </div>
        <div className="ReviewA__body">
            {choosePage()}
        </div>

        <div className="ReviewA__navegation">
            <section className="ReviewA__navegation__next">
                {(page === 1 || page === 2 || page === 3) ? <button onClick={next}>Atras</button> : <></>}
                <button onClick={next}>Siguiente</button>
            </section>
            <section className="ReviewA__navegation__info">
                <p>Antes de aprobar la solicitud de energía, es necesario revisar el formulario que el usuario llenó</p>
            </section>
        </div>

    </div>
}

export default ReviewA;

interface IPropsItemViewReview {
    title: string;
    description: string;
    icon: number;
}

export var ItemViewReview = (props: IPropsItemViewReview) => {

    const chooseIcon = (number: number) => {
        var view = <></>;
        switch (number) {
            case 0:
                view = <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.982 12.231H8.906L10.017 8.231H7.093L5.982 12.231ZM8.696 20.462L6.768 19.927L8.35 14.231H5.426L3.696 20.462L1.768 19.927L3.35 14.231H0V12.231H3.906L5.017 8.231H0V6.231H5.573L7.303 0L9.231 0.535L7.649 6.231H10.573L12.303 0L14.231 0.535L12.649 6.231H16V8.231H12.093L10.982 12.231H16V14.231H10.426L8.696 20.462Z" fill="#F07500" />
                </svg>
                break;
            case 1:
                view = <IconLocalitation />
                break;
            case 2:
                view = <IconOffice />
                break;
            case 3:
                view = <IconSend />
                break;
            case 4:
                view = <IconBarrio />
                break;
            case 5:
                view = <IconQuestion />
                break;
            case 6:
                view = <IconConfig />
                break;
            case 7:
                view = <IconConfig />
                break;
            case 8:
                view = <IconVoltage />
                break;
            case 9:
                view = <IconTornillo />
                break;
            case 10:
                view = <IconLlave />
                break;
            case 10:
                view = <IconFirma />
                break;


        }
        return view;
    }

    return <section className="item">
        <article className="item__icon">
            {chooseIcon(props.icon)}
        </article>
        <article className="item__title">
            {props.title}
        </article>
        <article className="item__information">
            {props.description}
        </article>
    </section>;

}