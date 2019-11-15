import React from 'react';
import './WelcomeInformation.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import * as Routes from '../../constants/Routes';
import UserContext from '../../hooks/UserContext';

const WelcomeInformation =  () => {

    const useUser = React.useContext(UserContext);

    React.useEffect ( () => {
        console.log(useUser);
    });

    const updateType = ( type ) => {
        useUser.type = type;
        //console.log(useUser)
    }

    const renderFromuser = ( user ) => {
        switch( user ){
            case '':
                return(
                    <section className="WelcomeInformation appear">
                        <h1 className="WelcomeInformation__title">Bienvenido a</h1>

                        <div className="WelcomeInformation__img">
                            <svg width="420" height="82" viewBox="0 0 420 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.5721 35.373C47.5721 25.9711 40.1247 18.3499 30.6221 18.3499C21.3024 18.3499 13.6725 25.9711 13.6725 35.373C13.6725 35.6784 13.6808 35.9823 13.6967 36.2839L13.6724 36.2899C13.6724 41.0042 17.5839 47.9869 19.1486 50.6059C20.7132 53.2246 22.0171 60.0774 22.0171 60.0774H26.7482H30.1006H30.6221H39.3574C39.3574 60.0774 40.5311 53.2246 42.0955 50.6061C43.6602 47.9871 47.5718 41.0257 47.5718 36.3114L47.5473 36.2947C47.5633 35.9928 47.5721 35.6786 47.5721 35.373Z" fill="#F07500"/>
                            <path d="M47.572 35.373C47.572 25.9711 40.1246 18.3499 30.6221 18.3499V60.0774H39.3573C39.3573 60.0774 40.531 53.2246 42.0955 50.6061C43.6601 47.9871 47.5717 41.0257 47.5717 36.3114L47.5472 36.2947C47.5633 35.9928 47.572 35.6786 47.572 35.373Z" fill="#F07500"/>
                            <path d="M35.9221 60.842C35.5259 60.842 35.1907 60.5194 35.1907 60.1218V51.3484C35.1907 50.8842 35.3278 50.3435 35.5233 49.9227L37.1631 46.4955H35.2026C35.0997 46.4955 34.8953 46.4865 34.8435 46.5759L33.4554 48.9129C33.2312 49.3018 32.8772 49.4833 32.4908 49.4644C32.1024 49.4468 31.7715 49.1871 31.5831 48.7792L30.6175 46.6813L29.6619 48.7646C29.4744 49.1733 29.1442 49.4163 28.7552 49.4345C28.3646 49.4517 28.0152 49.2395 27.7901 48.8506L26.4024 46.5767C26.351 46.4871 26.1463 46.4955 26.0433 46.4955H24.0764L25.7101 49.9247C25.9033 50.3459 26.0535 50.8853 26.0535 51.3485V60.122C26.0535 60.5195 25.8101 60.8422 25.4139 60.8422C25.0181 60.8422 24.7743 60.5195 24.7743 60.122V51.3485C24.7743 51.0929 24.5912 50.632 24.4845 50.3997L22.6196 46.4168C22.4438 46.0336 22.4407 45.6504 22.6458 45.3284C22.8513 45.0073 23.1896 44.8437 23.6097 44.8437H26.0431C26.6604 44.8437 27.3331 45.2115 27.6426 45.7474L28.6636 47.5026L29.6718 45.2963C30.0099 44.5583 30.1365 44.2795 30.6147 44.2795C31.0917 44.2795 31.2189 44.5536 31.559 45.2895L32.579 47.4971L33.6033 45.7471C33.9127 45.2115 34.5853 44.8435 35.2024 44.8435H37.6362C38.0572 44.8435 38.4159 45.0071 38.6204 45.3295C38.8255 45.6526 38.8405 46.0459 38.6625 46.4291L36.8365 50.4094C36.7291 50.6399 36.6523 51.0938 36.6523 51.3482V60.1216C36.6527 60.5194 36.3179 60.842 35.9221 60.842Z" fill="#F07500"/>
                            <path d="M37.6362 44.8457H35.2025C34.5854 44.8457 33.9127 45.2135 33.6033 45.7491L32.579 47.5094L31.559 45.2954C31.2209 44.5638 31.1703 44.2823 30.6221 44.2795V46.6847L31.5833 48.7653C31.7717 49.1733 32.1019 49.417 32.4908 49.4348C32.8769 49.4539 33.2312 49.2401 33.4557 48.8516L34.8436 46.5778C34.8953 46.4886 35.0996 46.4974 35.2027 46.4974H37.1631L35.5234 49.9247C35.3278 50.3455 35.1908 50.886 35.1908 51.3504V60.0791H36.6527V51.3504C36.6527 51.0958 36.7295 50.637 36.8369 50.4065L38.6713 46.4206C38.8489 46.0374 38.8295 45.6546 38.625 45.3316C38.4202 45.0093 38.0573 44.8457 37.6362 44.8457Z" fill="#F07500"/>
                            <path d="M22.7992 59.3491C21.365 59.3491 20.2061 60.2589 20.2061 61.6993V70.8659C20.2061 76.6276 24.9573 81.3416 30.6223 81.3416V59.3491H22.7992Z" fill="#F07500"/>
                            <path d="M38.4453 59.3445H30.6226V81.337C36.4703 81.337 41.0388 76.6227 41.0388 70.8612V61.6946C41.0388 60.2543 39.8797 59.3445 38.4453 59.3445Z" fill="#F07500"/>
                            <path d="M42.5002 64.7065V62.7417C42.5002 62.3818 42.0629 62.0972 41.7046 62.0972H30.6221V65.4008H41.7046C42.0629 65.4008 42.5002 65.0664 42.5002 64.7065Z" fill="#F07500"/>
                            <path d="M19.5397 62.0972C19.1815 62.0972 18.9268 62.3818 18.9268 62.7417V64.7065C18.9268 65.0664 19.1815 65.4008 19.5397 65.4008H30.6222V62.0972H19.5397Z" fill="#F07500"/>
                            <path d="M41.7046 71.4577C42.0631 71.4577 42.5002 71.0902 42.5002 70.73V68.7656C42.5002 68.4057 42.0629 68.1541 41.7046 68.1541H30.6221V71.4577H41.7046Z" fill="#F07500"/>
                            <path d="M18.9268 68.7656V70.73C18.9268 71.0902 19.1815 71.4577 19.5397 71.4577H30.6222V68.1541H19.5397C19.1815 68.1541 18.9268 68.4057 18.9268 68.7656Z" fill="#F07500"/>
                            <path d="M30.7137 11.803C29.6335 11.803 28.7949 10.9236 28.7949 9.83859V4.07691C28.7949 2.99223 29.6335 2.11255 30.7137 2.11255C31.7935 2.11255 32.6325 2.99223 32.6325 4.07691V9.83859C32.6325 10.9236 31.7935 11.803 30.7137 11.803Z" fill="#F07500"/>
                            <path d="M30.7137 11.803C29.6335 11.803 28.7949 10.9236 28.7949 9.83859V4.07691C28.7949 2.99223 29.6335 2.11255 30.7137 2.11255C31.7935 2.11255 32.6325 2.99223 32.6325 4.07691V9.83859C32.6325 10.9236 31.7935 11.803 30.7137 11.803Z" fill="#F07500"/>
                            <ellipse cx="30.5008" cy="30.6331" rx="30.5008" ry="30.6331" fill="white"/>
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
                            <ellipse cx="30.5008" cy="30.6331" rx="30.5008" ry="30.6331" fill="white"/>
                            </mask>
                            <g mask="url(#mask0)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.543 70.3756L30.5217 70.5984L30.2325 71.0274L30.5024 70.8004L30.4419 71.4316L30.767 70.5777L30.781 70.5659L30.803 70.5834L31.2124 71.6301L31.13 70.8449L32.1236 71.6392L31.1435 70.2609L87.4697 22.8719L72.094 8.9314L31.0673 69.7891L57.0949 1.43142L37.5867 -3.16797L30.7996 67.6967L23.3898 -2.90084L3.92418 1.87724L30.106 68.8017L-11.2699 10.6134L-26.2939 24.9355L30.543 70.3756Z" fill="#F07500"/>
                            </g>
                            <path d="M83.9634 15.2566H98.2241V69.4096H127.294V81.1659H83.9634V15.2566Z" fill="#F07500"/>
                            <path d="M168.162 81.999C159.021 81.999 152.073 79.623 147.32 74.8712C142.566 70.1193 140.189 63.1457 140.189 53.9505V15.2566H154.176V54.5985C154.176 59.8441 155.364 63.8554 157.741 66.6325C160.179 69.3479 163.653 70.7055 168.162 70.7055C172.672 70.7055 176.115 69.3479 178.492 66.6325C180.869 63.8554 182.057 59.8441 182.057 54.5985V15.2566H196.135V53.9505C196.135 63.084 193.728 70.0576 188.914 74.8712C184.16 79.623 177.243 81.999 168.162 81.999Z" fill="#F07500"/>
                            <path d="M280.703 15.2566V81.1659H268.088V45.1564L253.096 81.1659H243.863L228.779 45.6193V81.1659H216.255V15.2566H227.591L248.616 63.8554L269.459 15.2566H280.703Z" fill="#F07500"/>
                            <path d="M301.142 15.2566H346.027V26.4575H315.037V42.0091H344.107V53.3025H315.037V69.965H346.027V81.1659H301.142V15.2566Z" fill="#F07500"/>
                            <path d="M419.582 15.2566V81.1659H408.978L376.526 39.1394V81.1659H363.179V15.2566H373.692L406.144 57.1904V15.2566H419.582Z" fill="#F07500"/>
                        </svg>
                        </div>

                        <p className="WelcomeInformation__description">La plataforma de CELSIA que te ayudará en el proyecto de servicio de energía.</p>
                        
                        <div className="WelcomeInformation__footer">
                            <p className="WelcomeInformation__footer__description">Para empezar, dinos quién eres.</p>

                            <div className="WelcomeInformation__footer__btns">
                                <button type="button" onClick={ () => updateType('Cliente') }>Cliente</button>
                                <button type="button" onClick={ () => updateType('Asesor') }>Asesor</button>
                            </div>

                        </div>
                    </section>
                )

            case 'Cliente':
            return(
                <section className="WelcomeInformation appear">
                    <div className="WelcomeInformation__icons">
                        <button type="button" className="WelcomeInformation__icons__item" onClick={ () => useUser.type = "" }> <FontAwesomeIcon icon={ faAngleLeft } /> </button>
                    </div>
                    <h1 className="WelcomeInformation__title">¡Bienvenido!</h1>

                    <p className="WelcomeInformation__description">Haz ingresado como <br /> <strong>Cliente Celsia</strong></p>
                        
                    <div className="WelcomeInformation__login">
                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">¿Ya tienes cuenta?</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.LOGIN}>Iniciar Sesión</Link>
                            </div>

                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">De lo contrario</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.REGISTER}>Registrar</Link>
                            </div>
                        </div>
                </section>
            )

            case 'Asesor':
            return(
                <section className="WelcomeInformation appear">
                    <div className="WelcomeInformation__icons">
                        <button type="button" className="WelcomeInformation__icons__item" onClick={ () => useUser.type = "" }> <FontAwesomeIcon icon={ faAngleLeft } /> </button>
                        </div>
                    <h1 className="WelcomeInformation__title">¡Bienvenido!</h1>

                    <p className="WelcomeInformation__description">Haz ingresado como <br /> <strong>Asesor Celsia</strong></p>
                        
                    <div className="WelcomeInformation__login">
                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">¿Ya tienes cuenta?</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.LOGIN}>Iniciar Sesión</Link>
                            </div>

                            <div className="WelcomeInformation__login__btns">
                                <p className="WelcomeInformation__login__btns__text">De lo contrario</p>
                                <Link className="WelcomeInformation__login__btns__btn" to={Routes.REGISTER}>Registrar</Link>
                            </div>
                        </div>
                </section>
            )

            default:
               return 'No funciona'
        }
    }

    return(

        renderFromuser(useUser.type)
    )
}

export default WelcomeInformation;