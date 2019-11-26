import React, { useState, useContext, createRef, useEffect } from 'react';

import "./ReviewA.scss";
import HookUpdateManager from '../../../objects/HookUpdate';
import BackTitle from '../../BackTitle/BackTitle';

import ServicesContext from '../../../hooks/ServicesContext';
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
import IconHouse from '../icon/IconHouse';
import IconUser from '../icon/IconUser';
import IconMail from '../icon/IconMail';
import IconPhone from '../icon/IconPhone';
import PopUp from '../../PopUp/PopUp';
import Service from '../../../objects/Service/Service';

import CasesManager from '../../../containers/CasesManager/CasesManager';
import { RAZON } from '../ReviewB/ReviewB';
import ONotification from '../../../objects/Notification/Notification';
import Case from '../../Cases/Case/Case';




interface IPropsReviewA { }

const ReviewA = (props: IPropsReviewA) => {



    const razon1 = createRef<HTMLInputElement>();
    const razon2 = createRef<HTMLInputElement>();
    const razon3 = createRef<HTMLInputElement>();
    const [justification, setJustification] = useState("");


    const serviceManager = useContext(ServicesContext);
    var currentService = serviceManager.getCurrentService();
    var service = currentService ? currentService : new Service();

    const [firmUrl, setFirmUl] = useState("");

    useEffect(() => {

        service.getFileFirm((url: string) => {
            setFirmUl(url);
        })

    }, [])

    const [navegator] = useState(new HookUpdateManager())
    const [page, setPage, , pageBack] = navegator.useState("page", useState(0), true);

    const [, setPageG, , pageBackG] = serviceManager.useState("page");
    var user = service.user || new Client();

    var { FIRM, PROPIETY_CEDULA_DOC, CADASTRAL_NUMBER_DOC } = service.fileRoute || service.generateDefaulFileRoutes();


    const [accept, setAccept] = useState(false);

    const changeAccept = (value: boolean) => {
        setAccept(value);
    }


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
                        <article className="ReviewA__card__container horizontal">

                            <section>
                                <ItemViewReview
                                    title="Propietario"
                                    description=""
                                    icon={11} />

                                <article className="vertical">
                                    <ItemViewReview
                                        title="Nombre:"
                                        description={user.name}
                                        icon={12} />
                                    <ItemViewReview
                                        title="C.C:"
                                        description={user.cedula}
                                        icon={-1} />
                                    <ItemViewReview
                                        title="De:"
                                        description={`${service.information.PROPERTY.ADDRESS}, ${service.information.PROPERTY.MUNICIPALITY}`}
                                        icon={-1} />

                                </article>
                            </section>

                            <section className="vertical">
                                <ItemViewReview
                                    title="Correo electrónico:"
                                    description={user.email}
                                    icon={13} />
                                <ItemViewReview
                                    title="Teléfono:"
                                    description="+57 3012345432"
                                    icon={14} />
                            </section>

                        </article>
                    </section>
                break;
            case 2:
                view = <section className="ReviewA__card">
                    <article className="ReviewA__card__container vertical">

                        <section>
                            <ItemViewReview
                                title="Número Catastral:"
                                description={`${service.information.CADASTRAL_NUMBER}`}
                                icon={0} />
                            <ItemViewReview
                                title="Dirección:"
                                description={`${service.information.PROPERTY.NEIGHBORHOOD}`}
                                icon={1} />
                            <ItemViewReview
                                title="Municipio:"
                                description={`${service.information.PROPERTY.MUNICIPALITY}`}
                                icon={2} />
                            <ItemViewReview
                                title="Dirección de envío de factura:"
                                description={`${service.information.PROPERTY.ADDRESS}`}
                                icon={3} />
                        </section>

                        <section>
                            <ItemViewReview
                                title="Barrio:"
                                description={`${service.information.PROPERTY.NEIGHBORHOOD}`}
                                icon={4} />
                            <ItemViewReview
                                title="Estrato asignado:"
                                description="3"
                                icon={5} />
                        </section>

                    </article>
                </section>
                break;
            case 5:
                view = <section className="ReviewA__card">
                    <article className="ReviewA__card__container">
                        <section className="Solicitud">
                            <h2 className="Solicitud__title">Por favor selecciona una de las siguientes opciones para notificarle al cliente si su solicitud de energia ha sido</h2>
                            <div className="Solicitud__option vertical">
                                <label className="Solicitud__option__label Solicitud__option__accepted">
                                    <h1>Aprobada</h1>
                                    <img src="/img/icon/review/icon-aprobada.svg" alt="" />
                                    <input onClick={() => { changeAccept(true) }} name="review" type="radio" />
                                </label>
                                <div className="Solicitud__option__bar"></div>
                                <label className="Solicitud__option__label Solicitud__option__denegado">
                                    <h1>Denegada</h1>
                                    <img src="/img/icon/review/icon-denegada.svg" alt="" />
                                    <input onClick={() => { changeAccept(false) }} name="review" type="radio" />
                                </label>
                            </div>
                        </section>
                    </article>
                </section>
                break;
            case 6:
                view = <section className="ReviewA__card">
                    <article className="ReviewA__card__container">
                        <section className="Solicitud">
                            <h2 className="Solicitud__title">Por favor selecciona una o más razones por las cuales el formato de solicitud no está correcto</h2>
                            <div className="Solicitud__option">
                                <form className="Solicitud__option__form" onSubmit={(e) => e.preventDefault()}>
                                    <label className="Solicitud__option__form__item">
                                        <input ref={razon1} name="razon" type="radio" value={RAZON.INFORMATION_IMCOMPLETE} />
                                        <p>{RAZON.INFORMATION_IMCOMPLETE}</p>
                                    </label>

                                    <label className="Solicitud__option__form__item">
                                        <input ref={razon2} name="razon" type="radio" value={RAZON.BAD_SCANNED_DOCUMENT} />
                                        <p>{RAZON.BAD_SCANNED_DOCUMENT}</p>
                                    </label>
                                    <label className="Solicitud__option__form__item">
                                        <input ref={razon3} className="otro" name="razon" type="radio" value={RAZON.OTHER} />
                                        <p>{RAZON.OTHER}</p>
                                        <textarea onChange={(e) => { setJustification(e.target.value) }} className="otro__value" />
                                    </label>
                                </form>

                            </div>
                        </section>
                    </article>
                </section>
                break;
        }

        if (page === 3 || page === 4) {


            let votaje = "";
            let typeM = "";

            if (service.information.HOME_APPLIANCES === Case.monofasica120) {
                votaje = "1x120V";
                typeM = "Monofásica";
            } else if (service.information.HOME_APPLIANCES === Case.monofasica240) {
                votaje = "2x120V";
                typeM = "Monofásica";
            } else if (service.information.HOME_APPLIANCES === Case.trifasica120) {
                votaje = "1x120V";
                typeM = "Trifásica";
            } else if (service.information.HOME_APPLIANCES === Case.trifasica240) {
                votaje = "2x120V";
                typeM = "Trifásica";
            }




            view = view = <section className="ReviewA__card">


                <article className="ReviewA__card__container horizontal">
                    <section className="vertical">
                        <ItemViewReview
                            title="Uso del Servicio:"
                            description={service.information.TYPE}
                            icon={6} />
                        <ItemViewReview
                            title="Voltaje:"
                            description={`${votaje}`}
                            icon={7} />
                        <ItemViewReview
                            title="Red:"
                            description={`${typeM}`}
                            icon={8} />
                    </section>

                    <section>
                        <ItemViewReview
                            title="Modalidad de la instalación:"
                            description="Alquiler de instalación completa con mano de obra de varilla de puesta a tierra"
                            icon={9} />

                    </section>

                    <section id="firmaCase">
                        <ItemViewReview
                            title="Firma : "
                            description=""
                            icon={10} />
                        <img id="firmaCase__firm" src={firmUrl} alt="Firma" />

                    </section>

                </article>
                {page === 4 ?
                    <PopUp visible={true}>
                        <div className="confirmation">
                            <section className="confirmation__container">
                                <h1>¿Seguro que has terminado la revisión?</h1>
                                <div onClick={next} className="boton">Si</div>
                                <div onClick={back} className="boton">No</div>
                            </section>
                        </div>
                    </PopUp> : <></>}

            </section>;
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
        if (page === 5) {
            if (accept) {
                service.steps.approvedStep();
                if (service.steps.currentStep === (service.steps.steps.length - 1)) {
                    notificar(true, () => {
                        setPageG(CasesManager.CASE);
                    });
                } else {
                    setPageG(CasesManager.CASE);
                }
            } else {
                setPage(page + 1);
            }
        } else if (page === 6) {
            service.steps.refuseStep();
            notificar(false, () => {
                setPageG(CasesManager.CASE);
            });
        } else {
            setPage(page + 1);
        }

    }


    const notificar = (accept: boolean, load: Function) => {

        var notification = new ONotification();

        notification.setCaseUID(service.UID || "");

        notification.setTo(service.userUID, () => {

            if (accept) {
                console.log("Accepto la peticion")
                notification.setSubject(`Orden #${service.orden}`);
                notification.setSubject__subtitle(`Completada`);
                notification.setDescription("Los asesores de CELSIA encargados encargados de tu orden  han validado todos los pasos de tu proyecto.");
            } else {

                notification.setSubject(`Error en Paso ${service.steps.currentStep + 1}`);
                notification.setSubject__subtitle(`Orden #${service.orden}`);

                let razon = "";
                console.log(razon1, razon2, razon3)
                if (razon1.current && razon2.current && razon3.current) {
                    razon = razon1.current.checked === true ? razon1.current.value : razon;
                    razon = razon2.current.checked === true ? razon2.current.value : razon;
                    razon = razon3.current.checked === true ? razon3.current.value : razon;
                }

                console.log("Mi razon", razon)

                switch (razon) {
                    case RAZON.INFORMATION_IMCOMPLETE:
                        notification.setDescription(`La documentación suministrada en el Paso ${service.steps.currentStep + 1}: ${service.steps.getCurrentStep().information}, en donde la ${razon}. Por favor, verifique la infomación y vuelva a responder esta pregunta.`);
                        break;
                    case RAZON.BAD_SCANNED_DOCUMENT:
                        notification.setDescription(`La documentación suministrada en el Paso ${service.steps.currentStep + 1}: ${service.steps.getCurrentStep().information}, en donde la ${razon}. Por favor, verifique la infomación y vuelva a responder esta pregunta.`);
                        break;
                    case RAZON.OTHER:
                        notification.setDescription(`La documentación suministrada en el Paso ${service.steps.currentStep + 1}: ${service.steps.getCurrentStep().information}, en donde la ${justification}. Por favor, verifique la infomación y vuelva a responder esta pregunta.`);
                        break;
                }

            }

            notification.addToDatabase(() => {
                load();
            });

        });
    };

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
                {(page === 1 || page === 2 || page === 3 || page === 5 || page === 6) ? <button onClick={back}>Atras</button> : <></>}
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.982 12.231H8.906L10.017 8.231H7.093L5.982 12.231ZM8.696 20.462L6.768 19.927L8.35 14.231H5.426L3.696 20.462L1.768 19.927L3.35 14.231H0V12.231H3.906L5.017 8.231H0V6.231H5.573L7.303 0L9.231 0.535L7.649 6.231H10.573L12.303 0L14.231 0.535L12.649 6.231H16V8.231H12.093L10.982 12.231H16V14.231H10.426L8.696 20.462Z" fill="#F07500" />
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
                view = <IconVoltage />
                break;
            case 8:
                view = <IconTornillo />
                break;
            case 9:
                view = <IconLlave />
                break;
            case 10:
                view = <IconFirma />
                break;
            case 11:
                view = <IconHouse />
                break;
            case 12:
                view = <IconUser />
                break;
            case 13:
                view = <IconMail />
                break;
            case 14:
                view = <IconPhone />
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