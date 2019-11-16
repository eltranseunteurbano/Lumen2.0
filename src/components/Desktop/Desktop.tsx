import React from "react";
import "./Desktop.scss";
import { Review } from '../../objects/ReviewManger';


export const Desktop = (props: any) => {

    return (
        <article className="desktop">
            <article className="desktop__container">
                <section className="desktop__container__title">
                    {React.Children.map(props.children, (view, i) => { if (i === 0) return view })}
                </section>
                <section className="desktop__container__steps">
                    {React.Children.map(props.children, (view, i) => { if (i !== 0) { return view } })}
                </section>
            </article>
        </article>
    );
}


export class Paso {
    state: number = 0;
    descripcion: string;
    constructor(order: number, descripcion: string) {
        this.state = order;
        this.descripcion = descripcion;
    }
}

interface IPropsDesktopStep {
    state?: string;
    order?: number;
    value?: string;
    task?: Paso;
    review?: Review;
}

export const DesktopStep = (props: IPropsDesktopStep) => {

    let value = props.value;
    let state = props.state + "";

    if (props.task) {
        value = props.task.descripcion;
        state = props.task.state + "";
    }

    if (props.review) {
        value = props.review.information;
        state = props.review.status + "";
    }

    console.log(state)
    let type = state === "0" ? "" :
        state === "1" ? "progress" :
            "select";

    return (
        <article className={"desktop__step " + type}>
            <section className={"desktop__step__progress"}>
                <div className="desktop__step__progress__circle"></div>
                <div className="desktop__step__progress__line"></div>
            </section>
            <section className="desktop__step__info">
                <p className="desktop__step__info__step">{value}</p>
                {/** <p className="desktop__step__info__step">{props.step != null ? <span className="desktop__step__info__data">Paso {props.order}: </span> : ""}{props.value}</p> */}
            </section>
        </article>
    );
}

export default Desktop;

