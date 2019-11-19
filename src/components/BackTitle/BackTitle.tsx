import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import "./BackTitle.scss";


interface IPropsBackTitle {
    onClick?: Function;
}

var BackTitle = (props: IPropsBackTitle) => {

    const back = () => {
        if(props.onClick){
            props.onClick();
        }
    }

    return <div className="BackTitle">
        <div className="BackTitle__icons">
            <div onClick={back} className="BackTitle__icons__item"> <FontAwesomeIcon icon={faArrowLeft} /> </div>
        </div>
    </div>
}

export default BackTitle;