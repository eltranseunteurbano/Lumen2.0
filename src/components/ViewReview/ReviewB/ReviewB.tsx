import React, { useContext, useState, createRef } from "react";
import BackTitle from '../../BackTitle/BackTitle';
import ServicesContext from '../../../hooks/ServicesContext';
import Service from '../../../objects/Service/Service';

import HookUpdateManager from '../../../objects/HookUpdate';

import "./ReviewB.scss";
import CasesManager from '../../../containers/CasesManager/CasesManager';
import ONotification from '../../../objects/Notification/Notification';

const ReviewB = () => {

    const serviceManager = useContext(ServicesContext);
    var currentService = serviceManager.getCurrentService();
    var service = currentService ? currentService : new Service();

    const [navegator] = useState(new HookUpdateManager())
    const [page, setPage, , pageBack] = navegator.useState("page", useState(0), true);
    const [, setPageG, , pageBackG] = serviceManager.useState("page");

    const [accept, setAccept] = useState(false);
    const [justification, setJustification] = useState("");

    const razon1 = createRef<HTMLInputElement>();
    const razon2 = createRef<HTMLInputElement>();
    const razon3 = createRef<HTMLInputElement>();


    const changeAccept = (value: boolean) => {
        setAccept(value);
    }

    const back = () => {
        if (page === 0) {
            setPageG(pageBackG());
        } else {
            setPage(pageBack());
        }
    }

    const next = () => {
        if (page === 0) {
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
        } else if (page === 1) {
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

    const choosePage = () => {
        let view = <></>;
        switch (page) {

            case 0:
                view = <section className="ReviewB__card">
                    <article className="ReviewB__card__container">
                        <section className="Solicitud">
                            <h2 className="Solicitud__title">Por favor selecciona una de las siguientes opciones para notificarle al cliente si su solicitud de energia ha sido</h2>
                            <div className="Solicitud__option vertical">
                                <label onClick={() => { changeAccept(true) }} className="Solicitud__option__label Solicitud__option__accepted">
                                    <h1>Aprobado</h1>
                                    <img src="/img/icon/review/icon-aprobada.svg" alt="" />
                                    <input name="review" type="radio" />
                                </label>
                                <div className="Solicitud__option__bar"></div>
                                <label onClick={() => { changeAccept(false) }} className="Solicitud__option__label Solicitud__option__denegado">
                                    <h1>Denegado</h1>
                                    <img src="/img/icon/review/icon-denegada.svg" alt="" />
                                    <input name="review" type="radio" />
                                </label>
                            </div>
                        </section>
                    </article>
                </section>
                break;
            case 1:
                view = <section className="ReviewB__card">
                    <article className="ReviewB__card__container">
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

        return view;
    }


    return <div className="ReviewB">
        <BackTitle onClick={back} />
        <div className="ReviewB__header">
            <section className="ReviewB__header__title">
                <h1>Paso 1 : Unidad San Joaquín</h1>
            </section>
            <section className="ReviewB__header__info">
                <h2><span>Orden #</span>{service.orden}</h2>
            </section>
        </div>
        <div className="ReviewB__body">
            {choosePage()}
        </div>

        <div className="ReviewB__navegation">
            <section className="ReviewB__navegation__next">
                {(page === 1 || page === 2 || page === 3 || page === 5 || page === 6) ? <button onClick={back}>Atras</button> : <></>}
                <button onClick={next}>Siguiente</button>
            </section>
            <section className="ReviewB__navegation__info">
                <p>Antes de aprobar la solicitud de energía, es necesario revisar el formulario que el usuario llenó</p>
            </section>
        </div>
    </div>
}

export default ReviewB;

export var RAZON = {
    INFORMATION_IMCOMPLETE: "La información está incompleta",
    BAD_SCANNED_DOCUMENT: "Hay un documento mal escaneado",
    OTHER: "Otro"
}