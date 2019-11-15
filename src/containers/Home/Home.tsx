import React from 'react';
import './Home.scss';

import IlustrationInformation from '../../components/ilustrationInformation/IlustrationInformation';
import WelcomeInformation from '../../components/WelcomeInformation/WelcomeInformation';

const Home = () => {

    return(
        <section className="Home">
            <WelcomeInformation />
            <IlustrationInformation/>
        </section>
    )
}

export default Home;