import React from "react";
import { Link } from "react-router-dom";
import * as Routes from '../../constants/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons';

import "./BarTitle.scss";

var BarTitle = () => {
    return <div className="BarTitle">
        <div className="BarTitle__icons">
            <Link to={Routes.INDEX} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faQuestion} /> </Link>
            <Link to={Routes.INDEX} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faTimes} /> </Link>
        </div>
    </div>
}

export default BarTitle;