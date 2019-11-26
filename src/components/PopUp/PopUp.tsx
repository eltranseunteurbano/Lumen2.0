import React, { Children, ReactChild, useState } from "react";

import "./PopUp.scss";

interface IPropsPopUp {
    children?: ReactChild[] | any;
    visible?: boolean;
    close?: boolean;
    parent?: boolean; // Se adapta al tamaño del parent container, es necesario agregar posicion relative al elemento padre
    onClick?: Function;
}

export const PopUp = (props: IPropsPopUp) => {

    const [visible, setVisible] = useState(props.visible != null ? props.visible : true)

    const close = () => {
        if (props.close) {
            setVisible(false)
        }
        if (props.onClick) {
            props.onClick();
        }
    };

    var view = <></>;

    if (props.visible == true) {
        view = <section className={`PopUp ${props.parent ? "PopUp__display" : ""}`}>
            <article className="PopUp__background" onClick={close}></article>
            <article className="PopUp__container">
                {props.children ? Children.map(props.children, (view: ReactChild) => { return view }) : ""}
            </article>
        </section>
    }

    return view;

};


export default PopUp;