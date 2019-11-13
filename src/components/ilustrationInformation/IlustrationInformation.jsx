import React from 'react';
import './IlustrationInformation.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faQuestion } from '@fortawesome/free-solid-svg-icons';

import * as Routes from '../../constants/Routes';

const IlustrationInformation = (props) => {

    const backgroundImage = {
        backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/Fondo Ilustración.svg)'
    }

    return (
        <section className="IlustrationInformation appear" style={backgroundImage}>
            <div className="IlustrationInformation__icons">
                <Link to={Routes.INDEX} className="IlustrationInformation__icons__item"> <FontAwesomeIcon icon={faQuestion} /> </Link>
                <Link to={Routes.INDEX} className="IlustrationInformation__icons__item"> <FontAwesomeIcon icon={faTimes} /> </Link>
            </div>
            <img src={process.env.PUBLIC_URL + '/img/Ilustración Home Uno.svg'} alt="Ilustración" />
        </section>
    )
}

export default IlustrationInformation;