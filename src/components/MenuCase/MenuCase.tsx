import React, { useState, useContext } from "react";
import CasesManager from '../../containers/CasesManager/CasesManager';
import IconCampana from '../../icons/Notifications/Campana';
import IconRayo from '../../icons/Notifications/Rayo';
import IconLumen from "../../icons/IconLumen/IconLumen";
import ServicesContext from '../../hooks/ServicesContext';

import "./MenuCase.scss";

interface IPropsMenuCase { }

export function MenuCase(props: IPropsMenuCase) {

    const serviceManager = useContext(ServicesContext);
    const [page, setPage, pageVal] = serviceManager.useState("page");

    return <div className="MenuCase">
        <section className="MenuCase__title">
            <IconLumen />
        </section>
        <section className="MenuCase__navegation">
            <div onClick={() => {
                setPage(CasesManager.PROYECTS);
            }} className={`MenuCase__navegation__proyects ${pageVal() !== CasesManager.NOTIFICATIONS ? "active" : ""}`}>
                <div className="MenuCase__navegation__proyects__icon">
                    <IconRayo />
                </div>
                <div className="MenuCase__navegation__proyects__title">
                    <h2>Proyectos</h2>
                </div>
            </div>
            <div onClick={() => {
                setPage(CasesManager.NOTIFICATIONS);
            }} className={`MenuCase__navegation__notification ${pageVal() === CasesManager.NOTIFICATIONS ? "active" : ""}`}>
                <div className="MenuCase__navegation__notification__icon">
                    <IconCampana />
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