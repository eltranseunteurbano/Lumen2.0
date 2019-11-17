import React from 'react';
import './RegisterComponent.scss';

const RegisterComponent = (props) => {
    console.log(props.step);

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
                <>
                </>
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