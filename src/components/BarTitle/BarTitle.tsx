import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import * as Routes from '../../constants/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons';

import "./BarTitle.scss";

import UserContext from "../../hooks/UserContext";

var BarTitle = () => {

    const useUser = useContext(UserContext);

    const close = () => {
        useUser.logOut(()=>{
            window.location.href = Routes.INDEX;
        });
    }

    return <div className="BarTitle">
        <div className="BarTitle__icons">
            {/**
            <Link to={Routes.INDEX} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faQuestion} /> </Link>
            <Link to={Routes.INDEX} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faTimes} /> </Link>
             */}
            <a onClick={close} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faQuestion} /> </a>
            <a onClick={close} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faTimes} /> </a>
        </div>
    </div>
}

export default BarTitle;