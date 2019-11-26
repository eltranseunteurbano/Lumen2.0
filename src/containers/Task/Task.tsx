import React, { useState, createRef, useEffect, useContext } from "react";

import Case from '../../components/Cases/Case/Case';
import Service from '../../objects/Service/Service';
import Firm from '../../objects/Firm';
import HeaderSolicitud from "./HeaderSolicitud/HeaderSolicitud";
import ServicesContext from '../../hooks/ServicesContext';
import CasesManager from '../CasesManager/CasesManager';

import "./Task.scss"


interface ITask {
    case?: Service;
}

export const Task = (props: ITask) => {

    const servicesManager = useContext(ServicesContext);
    const [, setPageG] = servicesManager.useState<number>("page");

    const [update, setUpdate] = useState(false);
    const [service] = useState(props.case || new Service());
    const [page, setPage] = useState(0);

    var step = page === 0 ? 1 :
        page === 1 ? 2 :
            page === 2 ? 3 :
                page === 3 ? 4 :
                    page === 4 ? 5 :
                        page === 5 ? 6 :
                            page === 6 ? 6 :
                                page === 7 ? 6 :
                                    page === 8 ? 7 :
                                        page === 9 ? 8 :
                                            page === 10 ? 9 : 0;

    const [fileCadastral, setFileCadastra] = useState();
    const [filePropertyCedula, setFilePropertyCedula] = useState();

    const [firmaState] = useState<Firm>(new Firm(undefined, undefined, props.case));
    const refCanvasContainer = createRef<HTMLDivElement>();



    const erase = () => {

        if (firmaState) {
            firmaState.clearCanvas();
        }
    }

    useEffect(() => {

        if (refCanvasContainer.current) {
            firmaState.includeIn(refCanvasContainer.current);
        }

    }, []);

    useEffect(() => {
        if (refCanvasContainer.current) {
            firmaState.includeIn(refCanvasContainer.current);
        }
    }, [page])


    const next = () => {
        let allowNext = false;
        switch (page) {
            case 0:
                if (service.information.TYPE !== "") {
                    allowNext = true;
                }
                break;
            case 1:
                if (service.information.NAME !== "") {
                    allowNext = true;
                }
                break;
            case 2:
                if (service.information.ZONE !== "") {
                    allowNext = true;
                }
                break;
            case 3:
                if (service.information.TECNICO.NAME !== "" && service.information.TECNICO.LAST_NAME !== "" && service.information.TECNICO.CEDULA !== "" && service.information.TECNICO.PROFESSIONAL_CARD !== "") {
                    allowNext = true;
                }
                break;
            case 4:
                if (service.information.HOME_APPLIANCES !== "") {
                    allowNext = true;
                }
                break;
            case 5:
                allowNext = true;
                break;

            case 6:

                if (props.case) {
                    allowNext = true;
                } else {
                    if (service.information.CADASTRAL_NUMBER !== "" && fileCadastral !== undefined) {
                        allowNext = true;
                    }
                }

                break;
            case 7:
                if (service.information.PROPERTY.ADDRESS !== "" && service.information.PROPERTY.MUNICIPALITY !== "" && service.information.PROPERTY.NEIGHBORHOOD !== "" && service.information.PROPERTY.NEIGHBOR_INVOICE !== "") {
                    allowNext = true;
                }
                break;
            case 8:
                if (props.case) {
                    allowNext = true;
                } else {
                    if (filePropertyCedula !== null) {
                        allowNext = true;
                    }
                }

                break;
            case 9:
                if (service.information.FIRM.AUTHORIZED !== "") {
                    allowNext = true;
                }
                break;
            case 10:
                crearProyecto();
                break;

            default:
                break;
        }


        if (allowNext) {
            setPage(page + 1);
        }

    }

    const crearProyecto = () => {
        if (props.case) {

            service.updateInformation();
            if(service.UID){
                servicesManager.setCurrentServiceByUID(service.UID);
            }
            setPageG(CasesManager.CASE);

        } else {
            if (fileCadastral && filePropertyCedula) {
                firmaState.getImage((image: Blob) => {
                    service.addToDatabase(fileCadastral, filePropertyCedula, image, () => {
                        servicesManager.setCurrentService(service);
                        setPageG(CasesManager.CASE);
                    });
                })
            }
        }
    }

    const back = () => {
        let backPage = page - 1;
        if (backPage >= 0) {
            setPage(backPage);
        }
    }

    const changeDataCase = (type: string, value: string, event?: React.ChangeEvent<HTMLInputElement>) => {

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
            case TASK.CADASTRAL_NUMBER_DOC:
                if (event && event.target.files) {
                    setFileCadastra(event.target.files[0]);
                    /*
 service.uploadFileCadastral(fileCadastral, (ruta: string) => {
                        service.information.CADASTRAL_NUMBER_DOC = ruta;
                    });
                    */
                }
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
            case TASK.PROPERTY.ADDRESS:
                service.information.PROPERTY.ADDRESS = value;
                break;
            case TASK.PROPERTY.MUNICIPALITY:
                service.information.PROPERTY.MUNICIPALITY = value;
                break;
            case TASK.PROPERTY.NEIGHBORHOOD:
                service.information.PROPERTY.NEIGHBORHOOD = value;
                break;
            case TASK.PROPERTY.NEIGHBOR_INVOICE:
                service.information.PROPERTY.NEIGHBOR_INVOICE = value;
                break;
            case TASK.PROPERTY.CEDULA_DOC:
                //service.information.PROPERTY.CEDULA_DOC = value;
                if (event && event.target.files) {
                    setFilePropertyCedula(event.target.files[0]);
                }
                break;
            case TASK.FIRM.FIRM:
                // service.information.FIRM.FIRM = value;
                break;
            case TASK.FIRM.AUTHORIZED:
                service.information.FIRM.AUTHORIZED = value;
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
                            <strong>{step}. </strong> El service de energía es para:</p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones">

                        <div onClick={() => { changeDataCase(TASK.TYPE, Case.empresa) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.TYPE === Case.empresa ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-empresa.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Empresa</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.TYPE, Case.casa) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.TYPE === Case.casa ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Casa</p>
                        </div>
                    </div>


                </article>
                break;
            case 1:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>{step}. </strong> Elige un nombre para tu proyecto. Te recomendamos usar el nombre del barrio en donde se vaya a realizar
                    </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input">
                        <label className="CrearSolicitud__pregunta__input__label">
                            <p className="CrearSolicitud__pregunta__input__label__text">Nombre del proyecto</p>
                            <input className="CrearSolicitud__pregunta__input__label__input" onChange={(e) => { changeDataCase(TASK.NAME, e.target.value) }} defaultValue={service.information.NAME} type="text" placeholder="Nombre del pryecto" />
                        </label>
                    </div>


                </article>
                break;
            case 2:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>{step}. </strong> ¿En qué zona se encuentra tu vivienda o proyecto?
                        </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones">

                        <div onClick={() => { changeDataCase(TASK.ZONE, Case.urbana) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.ZONE === Case.urbana ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-ciudad.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Urbana</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.ZONE, Case.rural) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.ZONE === Case.rural ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Rural</p>
                        </div>
                    </div>


                </article>
                break;
            case 3:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>{step}. </strong> Por favor digita en los campos los datos del electricista que te ayudará en tu proyecto.
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


                </article>
                break;
            case 4:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>{step}. </strong> ¿Qué tipo de electrodomésticos tienes en tu vivienda o propiedad?
                </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones">

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.monofasica120) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.HOME_APPLIANCES === Case.monofasica120 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-1.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">1x120V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Monofásica</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.monofasica240) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.HOME_APPLIANCES === Case.monofasica240 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-2.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">2x120/240V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Monofásica</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.trifasica120) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.HOME_APPLIANCES === Case.trifasica120 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-3.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">2x120/208V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Trifásica</p>
                        </div>

                        <div onClick={() => { changeDataCase(TASK.HOME_APPLIANCES, Case.trifasica240) }} className={`CrearSolicitud__pregunta__opciones__opcion ${service.information.HOME_APPLIANCES === Case.trifasica240 ? "select" : ""}`}>
                            <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                                <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-4.svg'} alt="Icono" />
                            </div>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__description">3x120/208V</p>
                            <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Trifásica</p>
                        </div>
                    </div>


                </article>
                break;
            case 5:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>6. </strong> Información del predio.
                        </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <div className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text" style={{ fontSize: '20px', fontWeight: 'normal' }}>El número predial es un código con 30 caracteres (números y letras) que sirve para ubicar y referenciar un inmueble o propiedad.</p>
                            </div>

                            <div className="CrearSolicitud__pregunta__input__label">
                                <img style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/img/tasks/documento-predial.png'} alt="Ejemplo predial" />
                                <p className="CrearSolicitud__pregunta__input__label__text" style={{ fontSize: '14px', fontWeight: 'normal', color: '#F07500', marginTop: '20px' }}>Nota: Si tu propiedad no cuenta con número predial, entonces puedes adjuntar la documentación que confirme la veracidad del poseedor.</p>
                            </div>
                        </div>

                    </div>


                </article>
                break;
            case 6:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>6. </strong> Información del predio.
                    </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <div className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text" style={{ fontWeight: 'normal', fontSize: '20px' }}> <strong style={{ color: '#F07500' }}>*</strong> Por favor <strong>escribe, escanea y adjunta</strong> el Número Predial de tu propiedad o la documentación que confirme la veracidad del poseedor.</p>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Número Predial de tu propiedad</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="number" placeholder="Número Predial de tu propiedad" onChange={(e) => { changeDataCase(TASK.CADASTRAL_NUMBER, e.target.value) }} defaultValue={service.information.CADASTRAL_NUMBER} />
                            </label>
                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Añadir archivo</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="file" onChange={(e) => { changeDataCase(TASK.CADASTRAL_NUMBER_DOC, "", e) }} defaultValue={fileCadastral} />
                            </label>
                        </div>

                    </div>

                </article>
                break;
            case 7:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>6. </strong> Ubicación del predio.
                </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Dirección</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Dirección" onChange={(e) => { changeDataCase(TASK.PROPERTY.ADDRESS, e.target.value) }} defaultValue={service.information.PROPERTY.ADDRESS} />
                            </label>

                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Barrio</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Barrio" onChange={(e) => { changeDataCase(TASK.PROPERTY.NEIGHBORHOOD, e.target.value) }} defaultValue={service.information.PROPERTY.NEIGHBORHOOD} />
                            </label>
                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Municipio</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Municipio" onChange={(e) => { changeDataCase(TASK.PROPERTY.MUNICIPALITY, e.target.value) }} defaultValue={service.information.PROPERTY.MUNICIPALITY} />
                            </label>

                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Código factura del vecino</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Código factura del vecino" onChange={(e) => { changeDataCase(TASK.PROPERTY.NEIGHBOR_INVOICE, e.target.value) }} defaultValue={service.information.PROPERTY.NEIGHBOR_INVOICE} />
                            </label>
                        </div>

                    </div>


                </article>
                break;
            case 8:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>7. </strong> Cédula del propietario
                </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <div className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text" style={{ textAlign: 'center', marginBottom: '120px' }}>Por favor escanea la cédula de ciudadanía del propietario</p>
                            </div>
                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text">Añadir archivo</p>
                                <input className="CrearSolicitud__pregunta__input__label__input" type="file" onChange={(e) => { changeDataCase(TASK.PROPERTY.CEDULA_DOC, "", e) }} defaultValue={filePropertyCedula} />
                            </label>
                        </div>

                    </div>

                </article>
                break;
            case 9:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>8. </strong> Autorización
                </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <div className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text" style={{ textAlign: 'center', marginBottom: '120px', fontWeight: 'normal', fontSize: '20px' }}>Por favor <strong>firma</strong> en el siguiente recuadro blanco, para añadirla a tu solicitud</p>
                            </div>
                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <button className="CrearSolicitud__pregunta__input__label__input" type="button" style={{ backgroundColor: '#B9DF47', color: '#ffffff', fontWeight: 'bolder', fontSize: '20px' }} onClick={() => { changeDataCase(TASK.FIRM.AUTHORIZED, Case.si) }}> Si autorizo </button>
                            </label>

                            <label className="CrearSolicitud__pregunta__input__label">
                                <button className="CrearSolicitud__pregunta__input__label__input" type="button" style={{ backgroundColor: '#FF5767', color: '#ffffff', fontWeight: 'bolder', fontSize: '20px' }} onClick={() => { changeDataCase(TASK.FIRM.AUTHORIZED, Case.no) }}> No autorizo</button>
                            </label>
                        </div>

                    </div>


                </article>
                break;
            case 10:
                view = <article className="CrearSolicitud__pregunta">
                    <div className="CrearSolicitud__pregunta__texto">
                        <p className="CrearSolicitud__pregunta__texto__txt">
                            <strong>9. </strong> Firma solicitante
                    </p>
                    </div>

                    <div className="CrearSolicitud__pregunta__input-contenedor">

                        <div className="CrearSolicitud__pregunta__input">
                            <div className="CrearSolicitud__pregunta__input__label">
                                <p className="CrearSolicitud__pregunta__input__label__text" style={{ textAlign: 'center', fontWeight: 'normal', fontSize: '20px' }}>Por favor <strong>firma</strong> en el siguiente recuadro blanco, para añadirla a tu solicitud</p>
                            </div>
                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <div ref={refCanvasContainer} className="CrearSolicitud__pregunta__input__canvas" >
                                <img style={{ position: 'absolute', top: '10%', left: '52%', display: 'none' }} />
                            </div>

                        </div>

                        <div className="CrearSolicitud__pregunta__input">
                            <label className="CrearSolicitud__pregunta__input__label">
                                <button className="CrearSolicitud__pregunta__input__label__input" type="button" onClick={erase}> Reiniciar</button>
                            </label>

                        </div>

                    </div>


                </article>
                break;
        }
        return view;
    }

    return <div className={page > 0 ? "task task__width__complete" : "task task__width__complete"}>

        <article className="task__header">
            <section className="task__header__container">
                <HeaderSolicitud step={step} />
            </section>
        </article>
        <article className={"task__question"}>
            <section className="task__question__container">
                <section className="task__question__container__information">
                    {changePage(page)}
                </section>

                <section className="task__question__container__navigation">
                    <TaskContinue next={next} back={back} />
                </section>

            </section>
        </article>



    </div >;
}

export default Task;

interface IPropsTaskContinue {
    next: Function;
    back: Function
}

export function TaskContinue(props: IPropsTaskContinue) {
    return <div className="CrearSolicitud__pregunta__btns">
        <button onClick={() => { props.back() }} className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
        <button onClick={() => { props.next() }} className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
    </div>;
}

var TASK = {
    NAME: "name",
    TYPE: "type",
    ZONE: "zone",
    HOME_APPLIANCES: "home_appliances",
    PREVIOUS_SERVICES: "previous_services",
    CADASTRAL_NUMBER: "cadastral_number",
    CADASTRAL_NUMBER_DOC: "cadastral_number_doc",
    CHARACTERISTIC: "characteristic",
    DIGITAL_INVOICE: "digital_invoice",
    SEND: "send",
    TECNICO: {
        NAME: "tecnico_name",
        LAST_NAME: "tecnico_last_name",
        CEDULA: "tecnico_cedula",
        PROFESSIONAL_CARD: "tecnico_profesional_card"
    },
    PROPERTY: {
        ADDRESS: "property_address",
        NEIGHBORHOOD: "property_neightborhood",
        MUNICIPALITY: "property_municipality",
        NEIGHBOR_INVOICE: "property_neighbor_invoice",
        CEDULA_DOC: "property_cedula"
    },
    FIRM: {
        AUTHORIZED: "firm_authorized",
        FIRM: "firm_firm",
    }
}