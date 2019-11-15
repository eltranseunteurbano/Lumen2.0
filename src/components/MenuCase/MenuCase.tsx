import React, { useState } from "react";
import "./MenuCase.scss";
import CasesManager from '../../containers/CasesManager/CasesManager';

interface IPropsMenuCase {
    setPage: Function;
}

export function MenuCase(props: IPropsMenuCase) {

    const [seleccion, setSeleccion] = useState(MenuCase.Proyects);

    return <div className="MenuCase">
        <section className="MenuCase__title">
            <img src="/img/icon/icon-lumen.png" alt="" />
        </section>
        <section className="MenuCase__navegation">
            <div onClick={() => {
                props.setPage(CasesManager.Proyects);
                setSeleccion(MenuCase.Proyects);
            }} className={`MenuCase__navegation__proyects ${seleccion === MenuCase.Proyects ? "active" : ""}`}>
                <div className="MenuCase__navegation__proyects__icon">
                    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M11.9 20.5C11.9 22 10.7 23.2 9.2 23.2C7.7 23.2 6.5 22 6.5 20.5H11.9Z" />
                            <path d="M18.4 17.6V17.8C18.4 18.8 17.6 18.9 16.6 18.9H1.8C0.8 18.9 0 18.8 0 17.8V17.6C0 16.9 0.4 16.3 1 16L1.6 11C1.6 7.3 4.2 4.3 7.6 3.6V1.6C7.7 0.7 8.4 0 9.2 0C10 0 10.8 0.7 10.8 1.6V3.5C14.3 4.2 16.8 7.3 16.8 10.9L17.4 15.9C18 16.3 18.4 16.9 18.4 17.6Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="18.4" height="23.2" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="MenuCase__navegation__proyects__title">
                    <h2>Proyectos</h2>
                </div>

            </div>
            <div onClick={() => {
                props.setPage(CasesManager.Notifications);
                setSeleccion(MenuCase.Notification);
            }} className={`MenuCase__navegation__notification ${seleccion === MenuCase.Notification ? "active" : ""}`}>
                <div className="MenuCase__navegation__notification__icon">
                    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6476 10.3748H11.1668L16.271 -0.000148773H8.87523L1.27225 15.4533H5.23629L0.300049 27.8921L14.6476 10.3748Z" />
                    </svg>
                </div>
                <div className="MenuCase__navegation__notification__title">
                    <h2>Notificaciones</h2>
                </div>

            </div>
        </section>
    </div>
}

export default MenuCase;

MenuCase.Notification = "notification";
MenuCase.Proyects = "proyectos";