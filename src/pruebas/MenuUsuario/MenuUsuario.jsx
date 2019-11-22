import React from 'react';
import './MenuUsuario.scss';

const MenuUsuario = () => {

    const [proyectos, setProyectos] = React.useState (true);

    return(
        <section className="MenuUsuario">
            <article className="MenuUsuario__logo">
                <img src={process.env.PUBLIC_URL + '/img/logoHorizontal.svg'} alt="Logo"/>
            </article>

            <article className="MenuUsuario__menu">

                <div className={proyectos ? "MenuUsuario__menu__item  MenuUsuario__menu__item-active" : "MenuUsuario__menu__item"} onClick={() => setProyectos(true)}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="MenuUsuario__menu__item__proyectos">
                    <circle cx="30" cy="30" r="30" className="MenuUsuario__menu__item__proyectos__circle"/>
                    <path className="MenuUsuario__menu__item__proyectos__rayo" d="M39.4964 24.8214H34.524L41.8156 10H31.2503L20.3889 32.0763H26.0518L19 49.8461L39.4964 24.8214Z" fill="#F07500"/>
                </svg>


                    <p className="MenuUsuario__menu__item__text">Proyectos</p>
                </div>

                <div className={!proyectos ? "MenuUsuario__menu__item  MenuUsuario__menu__item-active" : "MenuUsuario__menu__item"} onClick={() => setProyectos(false)}>
                <svg className="MenuUsuario__menu__item__proyectos" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path className="MenuUsuario__menu__item__proyectos__circle" d="M32.4999 0C14.5514 0 0.000976562 14.5515 0.000976562 32.4993C0.000976562 50.4471 14.5514 65 32.4999 65C50.4483 65 65.0005 50.448 65.0005 32.4993C65.0005 14.5507 50.4483 0 32.4999 0ZM32.5005 50.4727C30.1679 50.4727 28.2758 48.5823 28.2758 46.2479H36.7247C36.7251 48.5823 34.8332 50.4727 32.5005 50.4727ZM46.7767 42.0117H46.7756V42.0115C46.7756 43.5736 45.5096 43.6765 43.9486 43.6765H21.0521C19.4904 43.6765 18.2255 43.5736 18.2255 42.0115V41.7424C18.2255 40.6189 18.8852 39.6569 19.8331 39.2006L20.7306 31.4542C20.7306 25.7831 24.7411 21.0498 30.0802 19.9331V16.9258C30.0802 15.589 31.1641 14.505 32.5016 14.505C33.8385 14.505 34.9224 15.589 34.9224 16.9258V19.9333C40.2615 21.0498 44.272 25.7827 44.272 31.4544L45.1695 39.2019C46.1174 39.6589 46.7767 40.6192 46.7767 41.7426V42.0117Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="65" height="65" className="MenuUsuario__menu__item__proyectos__rayo"/>
                        </clipPath>
                    </defs>
                </svg>
                    <p className="MenuUsuario__menu__item__text">Notificaciones</p>
                </div>
            </article>
        </section>
    )
}

export default MenuUsuario;