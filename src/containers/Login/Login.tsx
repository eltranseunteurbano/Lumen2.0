import React from 'react';
import './Login.scss';

import LoginComponent from '../../components/loginComponent/LoginComponent';
import IlustrationInformation from '../../components/ilustrationInformation/IlustrationInformation';

const Login = () => {

    return(
        <section className="Login">
            <LoginComponent />
            <IlustrationInformation /*appear={false}*/ />
        </section>
    )
}

export default Login;