import React from 'react';
import './RegisterComponent.scss';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const RegisterComponent = (props) => {
    console.log(props.step);

    const [ showModal, setShowModal ] = React.useState(false);

    const finalizar = () => {
        setShowModal(true);
    }

    const closeFinalizar = () => {
        setShowModal(false);
    }

    const renderStep = (number) => {

        switch(number){
            case 1:
                return(
                    <article className="RegisterComponent_one appear">
                        <div className="RegisterComponent_one__top">
            
                            <label className="RegisterComponent_one__top__label">
                                <p className="RegisterComponent_one__top__label__txt">Nombre</p>
                                <input className="RegisterComponent_one__top__label__input" type="text" name="namecliente" autoComplete="true" autoSave="true" autoFocus />
                            </label>
            
                            <label className="RegisterComponent_one__top__label">
                                <p className="RegisterComponent_one__top__label__txt">Apellido</p>
                                <input className="RegisterComponent_one__top__label__input" type="text" name="lastnamecliente" autoComplete="true" autoSave="true"/>
                            </label>
            
                        </div>
            
                        <div className="RegisterComponent_one__bottom">
            
                            <label className="RegisterComponent_one__bottom__label">
                                <p className="RegisterComponent_one__bottom__label__txt">Cédula de ciudadanía CC.</p>
                                <input className="RegisterComponent_one__bottom__label__input" type="number" name="idcliente" />
                            </label>
            
                            <form className="RegisterComponent_one__bottom__label">
                                <p className="RegisterComponent_one__bottom__label__txt">¿Eres quien hará uso del servicio?</p>
                                
                                <div className="RegisterComponent_one__bottom__label-input">
                                    <label>
                                        <input className="RegisterComponent_one__bottom__label__input" type="radio" name="usercliente" /> Si 
                                        <span className="checkmark"></span>
                                    </label>
                                    <label>
                                        <input className="RegisterComponent_one__bottom__label__input" type="radio" name="usercliente" /> No
                                        <span className="checkmark"></span>
                                    </label>
            
                                </div>
                            </form>
            
                        </div>
                            <div className="RegisterComponent_one__btns">
                                <button type="button" className="RegisterComponent_one__btns__btn">Siguiente</button>
                            </div>
                    </article>
            )
        case 2:
            return(
                <article className="RegisterComponent_two appear">
                    <div className="RegisterComponent_two__top">
                        <p className="RegisterComponent_two__top__txt">Tipo de Cliente</p>
                        
                        <div className="RegisterComponent_two__top__inputs">

                            <label className="RegisterComponent_two__top__inputs__label">
                                <input className="RegisterComponent_two__top__inputs__label__input" type="radio" name="tipoCliente" /> Individuo o cliente natural 
                                <span className="checkmark"></span>
                            </label>

                            <label className="RegisterComponent_two__top__inputs__label">
                                <input className="RegisterComponent_two__top__inputs__label__input" type="radio" name="tipoCliente" /> Constructora 
                                <span className="checkmark"></span>
                            </label>

                        </div>
    
                    </div>
                    
                    <div className="RegisterComponent_two__bottom">
                        <h1 className="RegisterComponent_two__bottom__title"> Responde la siguiente información si el servicio es para una <strong>empresa</strong> </h1>
                        <div className="RegisterComponent_two__bottom__inputs">
                            <label className="RegisterComponent_two__bottom__inputs__label">
                                <p className="RegisterComponent_two__bottom__inputs__label__txt">Nombre Jurídico</p>
                                <input type="text" name="nombrejuridico"/>
                            </label>
                            
                            <label className="RegisterComponent_two__bottom__inputs__label">
                                <p className="RegisterComponent_two__bottom__inputs__label__txt">NIT</p>
                                <input type="number" name="nit"/>
                            </label>
                        </div>

                    </div>

                    <div className="RegisterComponent_two__btns">
                        <button type="button" className="RegisterComponent_two__btns__btn">Atrás</button>
                        <button type="button" className="RegisterComponent_two__btns__btn">Siguiente</button>
                    </div>
                </article>
            )
            
        case 3:
            return(
                <article className="RegisterComponent_three appear">
                        <p className="RegisterComponent_three__txt">
                            Crea una contraseña de al menos <strong>4 números</strong> para proteger tus datos personales.
                        </p>
                        <p className="RegisterComponent_three__txt">
                            Con esta podrás acceder a Lumen y ver el progreso de tu proyecto.
                        </p>
                    
                    <div className="RegisterComponent_three__bottom">
                        <label className="RegisterComponent_three__bottom__inputs__label">
                            <p className="RegisterComponent_three__bottom__inputs__label__txt">Contraseña</p>
                            <input type="password" name="contrasena"/>
                        </label>
                        
                        <label className="RegisterComponent_three__bottom__inputs__label">
                            <p className="RegisterComponent_three__bottom__inputs__label__txt">Confirmar Contraseña</p>
                            <input type="password" name="confirmarcontrasena"/>
                        </label>
                    </div>

                    <div className="RegisterComponent_two__btns">
                        <button type="button" className="RegisterComponent_three__btns__btn">Atrás</button>
                        <button type="button" className="RegisterComponent_three__btns__btn" onClick={finalizar}>Finalizar</button>
                    </div>

                    <ReactModal
                        isOpen={ showModal }
                        contentLabel="Confirmar Registro"
                        className="Modal"
                        overlayClassName="Overlay">
                            <h1>¿Estás seguro que deseas finalizar el formulario?</h1>
                            <p>Puedes devolverte y revisar que los datos sean los correctos antes de enviar el formulario de registro.</p>
                            <div className="RegisterComponent_two__btns">
                                <button type="button" className="RegisterComponent_three__btns__btn" onClick={closeFinalizar}>Revisar</button>
                                <button type="button" className="RegisterComponent_three__btns__btn" >Finalizar</button>
                            </div>
                    </ReactModal>
                </article>
            )

        default:
            return(
                <>
                </>
            )
        }
    }
    
    return(
        <>
            {renderStep(props.step)}
        </>
    )
}

export default RegisterComponent