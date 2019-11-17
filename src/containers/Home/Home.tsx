import React, { useState, useContext } from 'react';
import './Home.scss';

import IlustrationInformation from '../../components/ilustrationInformation/IlustrationInformation';
import WelcomeInformation from '../../components/WelcomeInformation/WelcomeInformation';
import UserContext from '../../hooks/UserContext';
import BarTitle from '../../components/BarTitle/BarTitle';

const Home = () => {

    const useUser = useContext(UserContext);
    useUser.useState<boolean>("update", useState(false));

    return (
        <section className="Home">
            
            <WelcomeInformation />
            <IlustrationInformation />
        </section>
    )
}

export default Home;