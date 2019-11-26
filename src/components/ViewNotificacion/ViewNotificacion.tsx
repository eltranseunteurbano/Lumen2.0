import React from 'react';
import './ViewNotificacion.scss';
import ONotification from '../../objects/Notification/Notification';


interface IViewNotification {
    notification?: ONotification;
}

const ViewNotificacion = (props: IViewNotification) => {

    var notification = props.notification || new ONotification();

    const chooseView = () =>{}

    return (
        <section className="ViewNotificaciones">

            <div className="ViewNotificaciones__title">
                <h1>Notificaciones</h1>
            </div>

            <article className="ViewNotificaciones__header">
                <div className="ViewNotificaciones__header__noappear">
                    <p>.</p>
                </div>

                <div className="ViewNotificaciones__header__title">
                    <h1>{notification.subject}</h1>
                    <p>{notification.subject__subtitle}</p>
                </div>

                <div className="ViewNotificaciones__header__icon">
                    <svg viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.6727 31.6191C45.9903 31.6191 45.4373 32.1721 45.4373 32.8545V43.8234C45.4349 45.8695 43.7772 47.5276 41.7311 47.5295H7.06754C5.02144 47.5276 3.3638 45.8695 3.36139 43.8234V11.6305C3.3638 9.58491 5.02144 7.92679 7.06754 7.92438H18.0364C18.7187 7.92438 19.2718 7.37135 19.2718 6.689C19.2718 6.00712 18.7187 5.45361 18.0364 5.45361H7.06754C3.65769 5.45747 0.894486 8.22068 0.890625 11.6305V43.8238C0.894486 47.2337 3.65769 49.9969 7.06754 50.0008H41.7311C45.141 49.9969 47.9042 47.2337 47.908 43.8238V32.8545C47.908 32.1721 47.355 31.6191 46.6727 31.6191Z" />
                        <path d="M47.4184 2.2748C45.2473 0.103712 41.7274 0.103712 39.5563 2.2748L17.5163 24.3148C17.3653 24.4658 17.2562 24.6531 17.1993 24.8587L14.3009 35.3223C14.1817 35.7513 14.3029 36.2107 14.6175 36.5258C14.9326 36.8404 15.392 36.9616 15.821 36.8428L26.2846 33.944C26.4902 33.8871 26.6775 33.778 26.8285 33.627L48.868 11.5865C51.0357 9.41396 51.0357 5.89698 48.868 3.72445L47.4184 2.2748ZM20.2081 25.1178L38.2461 7.07928L44.0635 12.8967L26.025 30.9352L20.2081 25.1178ZM19.0461 27.4496L23.6937 32.0977L17.2649 33.8789L19.0461 27.4496ZM47.1211 9.83959L45.8109 11.1498L39.993 5.33189L41.3037 4.02171C42.5097 2.81576 44.465 2.81576 45.671 4.02171L47.1211 5.47135C48.3251 6.67875 48.3251 8.63268 47.1211 9.83959Z" />
                    </svg>
                </div>
            </article>

            <article className="ViewNotificaciones__mensaje">
                <h2 className="ViewNotificaciones__mensaje__title"> Envio de Retie </h2>
                <p className="ViewNotificaciones__mensaje__text">{notification.description}</p>
                <button type="button" className="ViewNotificaciones__mensaje__btn"> Corregir Información</button>
            </article>

        </section>
    )

}

export default ViewNotificacion;


const SendNotification = () => {
    return (
        <section className="ViewNotificaciones">
            <div className="ViewNotificaciones__title">
                <h1>Notificaciones</h1>
            </div>

            <article className="ViewNotificaciones__header">
                <div className="ViewNotificaciones__header__title">
                    <h1>Nuevo Mensaje</h1>
                    <div className="ViewNotificaciones__header__content">
                        <p>Asunto: </p> <input type="text" />
                    </div>
                </div>
            </article>

            <article className="ViewNotificaciones__inputFile">
                <input type="file" className="ViewNotificaciones__inputFile__input" />
            </article>

            <article className="ViewNotificaciones__inputFile">
                <button className="ViewNotificaciones__inputFile__enviar"> Enviar </button>
            </article>
        </section>
    )
}