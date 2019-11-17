import React, { useState } from "react";
import "./MenuCase.scss";
import CasesManager from '../../containers/CasesManager/CasesManager';
import IconCampana from '../../icons/Notifications/Campana';
import IconRayo from '../../icons/Notifications/Rayo';
import IconLumen from "../../icons/IconLumen/IconLumen";

interface IPropsMenuCase {
    setPage: Function;
}

export function MenuCase(props: IPropsMenuCase) {

    const [seleccion, setSeleccion] = useState(MenuCase.Proyects);

    return <div className="MenuCase">
        <section className="MenuCase__title">
            <IconLumen />
        </section>
        <section className="MenuCase__navegation">
            <div onClick={() => {
                props.setPage(CasesManager.PROYECTS);
                setSeleccion(MenuCase.Proyects);
            }} className={`MenuCase__navegation__proyects ${seleccion === MenuCase.Proyects ? "active" : ""}`}>
                <div className="MenuCase__navegation__proyects__icon">
                    <IconRayo />
                </div>
                <div className="MenuCase__navegation__proyects__title">
                    <h2>Proyectos</h2>
                </div>
            </div>
            <div onClick={() => {
                props.setPage(CasesManager.NOTIFICATIONS);
                setSeleccion(MenuCase.Notification);
            }} className={`MenuCase__navegation__notification ${seleccion === MenuCase.Notification ? "active" : ""}`}>
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