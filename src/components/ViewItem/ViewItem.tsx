import React from "react";

import "./ViewItem.scss";

interface IPropsViewItem {
    src: string;
    name: string;
    value: string;
    onClick?: Function;
}

export function ViewItem(props: IPropsViewItem) {

    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };




    return <label className="CardItem" onClick={onClick}>

        <div className="CardItem__image"><img src={props.src} alt="Imagen" /></div>
        <div className="CardItem__input">
            <div className="CardItem__input__container" >
                <input type="radio" name={props.name} id="" value={[props.value]} />
                <h2>
                    {props.value}
                </h2>
            </div>
        </div>
    </label>
}

export default ViewItem;