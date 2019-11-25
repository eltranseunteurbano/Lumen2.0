import React, { useContext, useState } from "react";
import BackTitle from '../../BackTitle/BackTitle';
import ServicesContext from '../../../hooks/ServicesContext';
import Service from '../../../objects/Service';
import HookUpdateManager from '../../../objects/HookUpdate';

const ReviewB = () => {

    const serviceManager = useContext(ServicesContext);
    var currentService = serviceManager.getCurrentService();
    var service = currentService ? currentService : new Service();

    const [navegator] = useState(new HookUpdateManager())
    const [page, setPage, , pageBack] = navegator.useState("page", useState(0), true);
    const [, setPageG, , pageBackG] = serviceManager.useState("page");

    const back = () => {
        if (page === 0) {
            setPageG(pageBackG());
        } else {
            setPage(pageBack());
        }
    }

    const next = () => {
        if (page !== 6) {
            setPage(page + 1);
        }
    }

    const choosePage = () => {
        let view = <></>;
        switch (page) {

            case 0:
                view = <section className="ReviewA__card">
                    <article className="ReviewA__card__container">
                        <section className="Solicitud">
                            <h2 className="Solicitud__title">Por favor selecciona una de las siguientes opciones para notificarle al cliente si su solicitud de energia ha sido</h2>
                            <div className="Solicitud__option vertical">
                                <label className="Solicitud__option__label Solicitud__option__accepted">
                                    <img src="/img/icon/review/icon-aprobada.svg" alt="" />
                                    <input name="review" type="radio" />
                                </label>
                                <div className="Solicitud__option__bar"></div>
                                <label className="Solicitud__option__label Solicitud__option__denegado">
                                    <img src="/img/icon/review/icon-denegada.svg" alt="" />
                                    <input name="review" type="radio" />
                                </label>
                            </div>
                        </section>
                    </article>
                </section>
                break;
            case 1:
                view = <section className="ReviewA__card">
                    <article className="ReviewA__card__container">
                        <section className="Solicitud">
                            <h2 className="Solicitud__title">Por favor selecciona una o más razones por las cuales el formato de solicitud no está correcto</h2>
                            <div className="Solicitud__option">
                                <form className="Solicitud__option__form" onSubmit={(e) => e.preventDefault()}>
                                    <label className="Solicitud__option__form__item">
                                        <input name="razon" type="radio" />
                                        <p>La información está incompleta</p>
                                    </label>

                                    <label className="Solicitud__option__form__item">
                                        <input name="razon" type="radio" />
                                        <p>Hay un documento mal escaneado</p>
                                    </label>
                                    <label className="Solicitud__option__form__item">
                                        <input className="otro" name="razon" type="radio" />
                                        <p>Otro</p>
                                        <input className="otro__value" type="text" />
                                    </label>
                                </form>

                            </div>
                        </section>
                    </article>
                </section>
                break;
        }

        return view;
    }


    return <div className="ReviewA">
        <BackTitle onClick={back} />
        <div className="ReviewA__header">
            <section className="ReviewA__header__title">
                <h1>Paso 1 : Unidad San Joaquín</h1>
            </section>
            <section className="ReviewA__header__info">
                <h2><span>Orden #</span>{service.orden}</h2>
            </section>
        </div>
        <div className="ReviewA__body">
            {choosePage()}
        </div>

        <div className="ReviewA__navegation">
            <section className="ReviewA__navegation__next">
                {(page === 1 || page === 2 || page === 3 || page === 5 || page === 6) ? <button onClick={back}>Atras</button> : <></>}
                <button onClick={next}>Siguiente</button>
            </section>
            <section className="ReviewA__navegation__info">
                <p>Antes de aprobar la solicitud de energía, es necesario revisar el formulario que el usuario llenó</p>
            </section>
        </div>
    </div>
}

export default ReviewB;