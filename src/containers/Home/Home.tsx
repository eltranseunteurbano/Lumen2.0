import React, { useState, useEffect, useContext } from 'react';
import './Home.scss';

import IlustrationInformation from '../../components/ilustrationInformation/IlustrationInformation';
import WelcomeInformation from '../../components/WelcomeInformation/WelcomeInformation';
import UserContext from '../../hooks/UserContext';

const Home = () => {

    const useUser = useContext(UserContext);
    const [update, setUpdate] = useState(false);

    useUser.updates.addUpdate("update", update, setUpdate );

    return(
        <section className="Home">
            <WelcomeInformation />
            <IlustrationInformation/>
        </section>
    )
}

export default Home;