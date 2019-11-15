import React, { useState } from "react";
import Desktop, { DesktopStep, Paso } from "../../components/Desktop/Desktop";
import ViewItem from '../../components/ViewItem/ViewItem';

import "./Task.scss"
import Case from '../../components/Cases/Case/Case';
import Servicio from '../../objects/Service';


var pasos: Paso[] = [];
pasos.push(new Paso(0, "¿En qué zona se encuentra tu vivienda o proyecto?"));
pasos.push(new Paso(0, "¿Qué tipo de electrodomésticos tienes?"));
pasos.push(new Paso(0, "¿Has tenido antes el servicio de energía?"));
pasos.push(new Paso(0, "Información del predio"));
pasos.push(new Paso(0, "Característica del servicio"));

var servicio = new Servicio();

export const Task = () => {

    const [page, setPage] = useState(0);
    const [paso, setPaso] = useState(0);

    if (paso - 1 >= 0) {
        pasos[paso - 1].state = 2;
    }
    if (paso < pasos.length) {
        pasos[paso].state = 1;
    }

    const continuar = () => {
        let index = page + 1;

        if (index <= pasos.length + 3) {
            setPage(index)

            if (page !== 0 && page !== 4) {
                if (paso < pasos.length) {
                    setPaso(paso + 1);
                }
            }
        }

    }

    const back = () => {
        let index:number = page - 1;
        if (index >= 0) {
            setPage(index);
        }
    }

    return <div className={page > 0 ? "task" : "task task__width__complete"}>

        <article className="task__header">
            <section className="task__header__container">

            </section>
        </article>
        <article className={"task__question"}>
            <section className="task__question__container">
                <section className="task__question__container__information">
                    {page === 0 ?
                        <div className="task__information">
                            <h1 className="task__title">El servicio de energia es para:</h1>
                            <div className="horizontal space-around">
                                <ViewItem key={0} onClick={() => {
                                    continuar();
                                    servicio.type = Case.empresa
                                }
                                }
                                    src="/img/tasks/location/icon-empresa.png" name="type" value={Case.empresa} />
                                <ViewItem key={1} onClick={() => {
                                    continuar();
                                    servicio.type = Case.casa
                                }
                                }
                                    src="/img/tasks/location/icon-rural.png" name="type" value={Case.casa} />
                                <ViewItem key={2} onClick={() => {
                                    continuar();
                                    servicio.type = Case.constructora
                                }
                                }
                                    src="/img/tasks/location/icon-constructora.png" name="type" value={Case.constructora} />
                            </div>

                        </div>
                        :
                        page === 1 ?
                            <div className="task__information">
                                <h1>¿En qué zona se encuentra tu vivienda o proyecto?</h1>
                                <div className="horizontal space-around">
                                    <ViewItem key={3} onClick={() => { servicio.zona = Case.urbana }} src="/img/tasks/location/icon-ciudad.png" name="vivienda" value={Case.urbana} />
                                    <ViewItem key={4} onClick={() => { servicio.zona = Case.rural }} src="/img/tasks/location/icon-rural.png" name="vivienda" value={Case.rural} />
                                </div>

                            </div>
                            :
                            page === 2 ?
                                <div className="task__information">
                                    <h1>¿Qué tipo de electrodomésticos tienes?</h1>
                                    <div className="grid">
                                        <ViewItem key={5} onClick={() => { servicio.electrodomesticos = Case.electrodomesticoA }} src="/img/tasks/electrodomesticos/electrodomestico-1.png" name="electrodomestico" value={Case.electrodomesticoA} />
                                        <ViewItem key={6} onClick={() => { servicio.electrodomesticos = Case.electrodomesticoB }} src="/img/tasks/electrodomesticos/electrodomestico-2.png" name="electrodomestico" value={Case.electrodomesticoB} />
                                        <ViewItem key={7} onClick={() => { servicio.electrodomesticos = Case.electrodomesticoC }} src="/img/tasks/electrodomesticos/electrodomestico-3.png" name="electrodomestico" value={Case.electrodomesticoC
                                        } />
                                        <ViewItem key={8} onClick={() => { servicio.electrodomesticos = Case.electrodomesticoD }} src="/img/tasks/electrodomesticos/electrodomestico-4.png" name="electrodomestico" value={Case.electrodomesticoD} />
                                    </div>

                                </div>
                                :
                                page === 3 ?
                                    <div className="task__information">
                                        <h1>¿Has tenido antes el servicio de energía?</h1>
                                        <div className="grid">
                                            <ViewItem key={9} onClick={() => { servicio.servicioPrevio = Case.si }} src="/img/tasks/like/icon-face-like.svg" name="electrodomestico" value={Case.si} />
                                            <ViewItem key={10} onClick={() => { servicio.servicioPrevio = Case.no }} src="/img/tasks/like/icon-face-dislike.svg" name="electrodomestico" value={Case.no} />

                                        </div>

                                    </div>
                                    : page === 4 ?
                                        <div className="task__information">
                                            <h1>Información del predio</h1>
                                            <h2>Número Catastral</h2>
                                            <p>El número catastral es un código con 21 caracteres (números y letras) que sirve para ubicar y referenciar un inmueble o propiedad.</p>
                                            <div>
                                                <img src="/img/tasks/documento-predial.png" alt="" />
                                            </div>

                                        </div>
                                        : page === 5 ?
                                            <div className="task__information">
                                                <h1>Información del predio</h1>
                                                <h2>Escribe en los cuadros el Número Catastral de tu propiedad</h2>

                                                <input onChange={(e: any) => { servicio.numeroCatastral = e.target.value }} type="text" name="" id="" />
                                            </div>
                                            : page === 6 ?
                                                <div className="task__information">
                                                    <h1>Factura digital</h1>
                                                    <h2>¿Deseas recibir tu factura digital?</h2>
                                                    <button onClick={() => {
                                                        servicio.facturaDigital = true;
                                                        continuar();
                                                    }}>Si</button>
                                                    <button onClick={() => {
                                                        servicio.facturaDigital = false;
                                                        continuar();
                                                    }}>No</button>
                                                </div>
                                                : page === 7 ?
                                                    <div className="task__information">
                                                        <h1>Característica del servicio</h1>
                                                        <h2>A qué va dirigido el servicio</h2>
                                                        <div className="grid">
                                                            <ViewItem key={12} onClick={() => { servicio.caracteristica = Case.residencial }} src="/img/tasks/location/icon-house.png" name="electrodomestico" value={Case.residencial} />
                                                            <ViewItem key={13} onClick={() => { servicio.caracteristica = Case.comercial }} src="/img/tasks/location/icon-negocio.png" name="electrodomestico" value={Case.comercial} />
                                                            <ViewItem key={14} onClick={() => { servicio.caracteristica = Case.oficial }} src="/img/tasks/location/icon-office.png" name="electrodomestico" value={Case.oficial
                                                            } />
                                                            <ViewItem key={15} onClick={() => { servicio.caracteristica = Case.especial }} src="/img/tasks/location/icon-hospital.png" name="electrodomestico" value={Case.especial} />
                                                        </div>
                                                    </div>
                                                    : page === 8 ?
                                                        <div className="task__information">
                                                            <h1>¡Finalizó el formulario!</h1>
                                                            <button onClick={() => {
                                                                servicio.addToDatabase();
                                                            }}>Enviar Solicitud</button>
                                                        </div>
                                                        : ""
                    }



                </section>

                {page > 0 ?
                    <section className="task__question__container__navigation">
                        <TaskContinue onClick={continuar} />
                    </section>
                    : ""
                }





            </section>
        </article>

        {
            page > 0 ?

                <div className="task__navbar">
                    <Desktop><h1 className="desktop__container__title__h1">Pasos para tu proyecto de servicio de energía</h1>

                        {pasos.map((tarea, i) => {
                            return <DesktopStep task={tarea} key={i} order={i} />
                        })}

                    </Desktop>
                </div>
                : ""
        }


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