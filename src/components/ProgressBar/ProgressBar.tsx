import React from "react";
import "./ProgressBar.scss";

interface IProgressBar {
    value: number;
    max?: number;
}

export function ProgressBar(props: IProgressBar) {

    return <div className="ProgressBar">
        <progress className="ProgressBar__progress" max={props.max ? props.max : 5} value={props.value} />
    </div>;

}

export default ProgressBar;