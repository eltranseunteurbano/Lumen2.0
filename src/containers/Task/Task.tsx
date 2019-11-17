import React, { useState } from "react";
import Desktop, { DesktopStep, Paso } from "../../components/Desktop/Desktop";
import ViewItem from '../../components/ViewItem/ViewItem';

import "./Task.scss"
import Case from '../../components/Cases/Case/Case';
import service, { Service } from '../../objects/Service';
import MenuCase from "../../components/MenuCase/MenuCase";





export const Task = () => {

    const [update, setUpdate] = useState(false);
    const [service, setservice] = useState(new Service());
    const [page, setPage] = useState(0);


    const next = () => {
        let allowNext = false;
        switch (page) {
            case 0:
                if (service.information.TYPE != "") {
                    allowNext = true;
                }
                break;
            case 1:
                if (service.information.NAME != "") {
                    allowNext = true;
                }
                break;
            case 2:
                if (service.information.ZONE != "") {
                    allowNext = true;
                }
                break;
            case 3:
                if (service.information.TECNICO.NAME != "" && service.information.TECNICO.LAST_NAME != "" && service.information.TECNICO.CEDULA != "" && service.information.TECNICO.PROFESSIONAL_CARD != "") {
                    allowNext = true;
                }
                break;
            case 4:
                if (service.information.HOME_APPLIANCES != "") {
                    allowNext = true;
                }

                break;

            default:
                break;
        }


        if (allowNext) {
            setPage(page + 1);
        }
    }

    const back = () => {


    }

    const changeDataCase = (type: string, value: string) => {
        console.log(type, value)
        switch (type) {
            case TASK.NAME:
                service.information.NAME = value;
                break;
            case TASK.TYPE:
                service.information.TYPE = value;
                break;
            case TASK.ZONE:
                service.information.ZONE = value;
                break;
            case TASK.HOME_APPLIANCES:
                service.information.HOME_APPLIANCES = value;
                break;
            case TASK.PREVIOUS_SERVICES:
                service.information.PREVIOUS_SERVICES = value;
                break;
            case TASK.CADASTRAL_NUMBER:
                service.information.CADASTRAL_NUMBER = value;
                break;
            case TASK.CHARACTERISTIC:
                service.information.CHARACTERISTIC = value;
                break;
            case TASK.DIGITAL_INVOICE:
                service.information.DIGITAL_INVOICE = value;
                break;
            case TASK.SEND:
                service.information.SEND = value;
                break;
            case TASK.TECNICO.NAME:
                service.information.TECNICO.NAME = value;
                break;
            case TASK.TECNICO.LAST_NAME:
                service.information.TECNICO.LAST_NAME = value;
                break;
            case TASK.TECNICO.CEDULA:
                service.information.TECNICO.CEDULA = value;
                break;
            case TASK.TECNICO.PROFESSIONAL_CARD:
                service.information.TECNICO.PROFESSIONAL_CARD = value;
                break;
        }
        setUpdate(!update);
    }

    const changePage = (numero: number) => {
        let view = <></>;
        switch (numero) {
            case 0:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>1. </strong> El service de energía es para:</p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones">

                        <div onClick={() => { changeDataCase(TASK.TYPE, Case.empresa) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.TYPE === Case.empresa ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-empresa.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Empresa</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.TYPE, Case.casa) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.TYPE === Case.casa ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Casa</p>
                        </div>
                    </div>

                    <div className="CrearSolicitud__pregunta__btns">
                        <button onClick={back} className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                        <button onClick={next} className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                    </div>
                </article>
                break;
            case 1:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>2. </strong> Elige un nombre para tu proyecto. Te recomendamos usar el nombre del barrio en donde se vaya a realizar
                    </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input">
                        <label className="CrearSolicitud__pregunta__input__label">
                            <p className="CrearSolicitud__pregunta__input__label__text">Nombre del proyecto</p>
                            <input className="CrearSolicitud__pregunta__input__label__input" onChange={(e) => { changeDataCase(TASK.NAME, e.target.value) }} defaultValue={service.information.NAME} type="text" placeholder="Nombre del pryecto" />
                        </label>
                    </div>

                    <div className="CrearSolicitud__pregunta__btns">
                        <button onClick={back} className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                        <button onClick={next} className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                    </div>
                </article>
                break;
            case 2:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>3. </strong> ¿En qué zona se encuentra tu vivienda o proyecto?
                        </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones">

                        <div onClick={() => { changeDataCase(TASK.ZONE, Case.urbana) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.ZONE === Case.urbana ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-ciudad.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Urbana</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.ZONE, Case.rural) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.ZONE === Case.rural ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Rural</p>
                        </div>
                    </div>

                    <div className="CrearSolicitud__pregunta__btns">
                        <button onClick={back} className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                        <button onClick={next} className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                    </div>
                </article>
                break;
            case 3:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>4. </strong> Por favor digita en los campos los datos del electricista que te ayudará en tu proyecto.
                    </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Nombre</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Nombre" onChange={(e) => { changeDataCase(TASK.TECNICO.NAME, e.target.value) }} defaultValue={service.information.TECNICO.NAME} />
                            </label>

                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Apellido</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Apellido" onChange={(e) => { changeDataCase(TASK.TECNICO.LAST_NAME, e.target.value) }} defaultValue={service.information.TECNICO.LAST_NAME} />
                            </label>
                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Cédula de ciudadanía</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="number" placeholder="Cédula de ciudadanía" onChange={(e) => { changeDataCase(TASK.TECNICO.CEDULA, e.target.value) }} defaultValue={service.information.TECNICO.CEDULA} />
                            </label>

                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Número de tarjeta profesional</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="number" placeholder="Número de tarjeta profesional" onChange={(e) => { changeDataCase(TASK.TECNICO.PROFESSIONAL_CARD, e.target.value) }} defaultValue={service.information.TECNICO.PROFESSIONAL_CARD} />
                            </label>
                        </div>

                    </div>

                    <div className="CrearSolicitud__pregunta__btns">
                        <button onClick={back} className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                        <button onClick={next} className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                    </div>
                </article>
                break;
            case 4:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>5. </strong> ¿Qué tipo de electrodomésticos tienes en tu vivienda o propiedad?
                </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones">

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.monofasica120) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.HOME_APPLIANCES === Case.monofasica120 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-1.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">1x120V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Monofásica</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.monofasica240) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.HOME_APPLIANCES === Case.monofasica240 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-2.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">2x120/240V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Monofásica</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.trifasica120) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.HOME_APPLIANCES === Case.trifasica120 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-3.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">2x120/208V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Trifásica</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.trifasica240) }} className={"CrearSolicitud__pregunta__opciones__opcion" + ` ${service.information.HOME_APPLIANCES === Case.trifasica240 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-4.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">3x120/208V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Trifásica</p>
                        </div>
                    </div>

                    <div className="CrearSolicitud__pregunta__btns">
                        <button onClick={back} className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                        <button onClick={next} className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                    </div>
                </article>
                break;
        }
        return view;
    }

    return <div className={page > 0 ? "task task__width__complete" : "task task__width__complete"}>

        <article className="task__header">
            <section className="task__header__container">
            </section>
        </article>
        <article className={"task__question"}>
            <section className="task__question__container">
                <section className="task__question__container__information">
                    {changePage(page)}
                    {

                        page === 5 ?
                            <div className="task__information">
                                <h1>Información del predio</h1>
                                <h2>Escribe en los cuadros el Número Catastral de tu propiedad</h2>

                                <input onChange={(e: any) => { changeDataCase(TASK.CADASTRAL_NUMBER, e.target.value) }} type="text" name="" id="" />
                            </div>
                            : page === 6 ?
                                <div className="task__information">
                                    <h1>Factura digital</h1>
                                    <h2>¿Deseas recibir tu factura digital?</h2>
                                    <button onClick={() => {
                                        changeDataCase(TASK.DIGITAL_INVOICE, "true")
                                        next();
                                    }}>Si</button>
                                    <button onClick={() => {
                                        changeDataCase(TASK.DIGITAL_INVOICE, "false")
                                        next();
                                    }}>No</button>
                                </div>
                                : page === 7 ?
                                    <div className="task__information">
                                        <h1>Característica del service</h1>
                                        <h2>A qué va dirigido el service</h2>
                                        <div className="grid">
                                            <ViewItem key={12} onClick={() => { changeDataCase(TASK.DIGITAL_INVOICE, Case.residencial) }} src="/img/tasks/location/icon-house.png" name="electrodomestico" value={Case.residencial} />
                                            <ViewItem key={13} onClick={() => { changeDataCase(TASK.DIGITAL_INVOICE, Case.comercial) }} src="/img/tasks/location/icon-negocio.png" name="electrodomestico" value={Case.comercial} />
                                            <ViewItem key={14} onClick={() => { changeDataCase(TASK.DIGITAL_INVOICE, Case.oficial) }} src="/img/tasks/location/icon-office.png" name="electrodomestico" value={Case.oficial
                                            } />
                                            <ViewItem key={15} onClick={() => { changeDataCase(TASK.DIGITAL_INVOICE, Case.especial) }} src="/img/tasks/location/icon-hospital.png" name="electrodomestico" value={Case.especial} />
                                        </div>
                                    </div>
                                    : page === 8 ?
                                        <div className="task__information">
                                            <h1>¡Finalizó el formulario!</h1>
                                            <button onClick={() => {
                                                service.addToDatabase();
                                            }}>Enviar Solicitud</button>
                                        </div>
                                        : ""
                    }



                </section>

                {page > 0 ?
                    <section className="task__question__container__navigation">
                        <TaskContinue onClick={next} />
                    </section>
                    : ""
                }





            </section>
        </article>



    </div >;
}

export default Task;

interface IPropsTaskContinue {
    onClick: Function;
}

export function TaskContinue(props: IPropsTaskContinue) {
    return <div className="task__question__button__next" onClick={() => props.onClick()}>
        <svg width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.17135 35.083H50.7653L30.4091 55.0079C28.7823 56.6003 28.7823 59.2134 30.4091 60.8057C32.0359 62.3981 34.6639 62.3981 36.2907 60.8057L63.7799 33.8989C65.4067 32.3066 65.4067 29.7343 63.7799 28.1419L36.3324 1.19427C34.7056 -0.39809 32.0776 -0.39809 30.4508 1.19427C28.824 2.78663 28.824 5.35891 30.4508 6.95127L50.7653 26.917H4.17135C1.87711 26.917 0 28.7544 0 31C0 33.2456 1.87711 35.083 4.17135 35.083Z" />
        </svg>
    </div>;
}

var TASK = {
    NAME: "name",
    TYPE: "type",
    ZONE: "zone",
    HOME_APPLIANCES: "home_appliances",
    PREVIOUS_SERVICES: "previous_services",
    CADASTRAL_NUMBER: "cadastral_number",
    CHARACTERISTIC: "characteristic",
    DIGITAL_INVOICE: "digital_invoice",
    SEND: "send",
    TECNICO: {
        NAME: "tecnico_name",
        LAST_NAME: "tecnico_last_name",
        CEDULA: "tecnico_cedula",
        PROFESSIONAL_CARD: "tecnico_profesional_card"
    }
}