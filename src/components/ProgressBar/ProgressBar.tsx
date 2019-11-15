import React from "react";
import "./ProgressBar.scss";

interface IProgressBar {
    value: number;
    className: string;
}

export function ProgressBar(props: IProgressBar) {

    return <div className={`ProgressBar ` + props.className ? props.className: ""}>
        <progress className="ProgressBar__progress" max="5" value={props.value} />
    </div>;

}

export default ProgressBar;