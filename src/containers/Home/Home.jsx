import React from 'react';
import './Home.scss';

import WelcomeInformation from '../../components/WelcomeInformation/WelcomeInformation';
import IlustrationInformation from '../../components/ilustrationInformation/IlustrationInformation';

const Home = () => {

    return(
        <section className="Home">
            <WelcomeInformation />
            <IlustrationInformation/>
        </section>
    )
}

export default Home;