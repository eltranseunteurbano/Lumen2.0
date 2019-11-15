import React from "react";
import "./ProgressBar.scss";

interface IProgressBar {
    value: number;
}

export function ProgressBar(props: IProgressBar) {

    return <div className="ProgressBar">
        <progress className="ProgressBar__progress" max="5" value={props.value} />
    </div>;

}

export default ProgressBar;