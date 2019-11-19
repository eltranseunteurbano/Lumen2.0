import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import * as Routes from '../../constants/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import "./BarTitle.scss";

import UserContext from "../../hooks/UserContext";
import ServicesContext from '../../hooks/ServicesContext';

var BarTitle = () => {

    const useUser = useContext(UserContext);
    const serviceManager = useContext(ServicesContext);

    const [page, setPage, pageValue, pageBack] = serviceManager.useState("page");

    const close = () => {
        useUser.logOut(() => {
            window.location.href = Routes.INDEX;
        });
    }

    const back = () => {
        if(pageBack()){
            setPage(pageBack());
        }
    }

    return <div className="BarTitle">
        <div className="BarTitle__icons">
            {/**
            <Link to={Routes.INDEX} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faQuestion} /> </Link>
            <Link to={Routes.INDEX} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faTimes} /> </Link>
             */}
            <div onClick={back} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faArrowLeft} /> </div>
            <div onClick={close} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faQuestion} /> </div>
            <div onClick={close} className="BarTitle__icons__item"> <FontAwesomeIcon icon={faTimes} /> </div>
        </div>
    </div>
}

export default BarTitle;