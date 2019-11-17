import React, { useState } from 'react';
import './Register.scss';
import RegisterHeader from '../../components/RegisterHeader/RegisterHeader';
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent';

const Register = () => {

    const [ step, setStep ] = useState(1);

    return(
        <section className="Register appear">
            <RegisterHeader step={step}/>
            <RegisterComponent step={step} setStep={setStep}/>
            <div className="Register__background"/>
        </section>
    )
}

export default Register;