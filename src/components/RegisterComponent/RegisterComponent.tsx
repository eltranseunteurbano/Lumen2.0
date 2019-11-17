import React, { useState, useContext, useEffect, createRef } from 'react';
import './RegisterComponent.scss';
import UserContext from '../../hooks/UserContext';
import { NameUser } from '../../hooks/UserContext';
import Client from '../../objects/Client';
import Adviser from '../../objects/Adviser';


interface IPropsRegisterComponent {
    step: number;
}

const RegisterComponent = (props: IPropsRegisterComponent) => {

    var useUser = useContext(UserContext);
    let user = useUser.user;

    if (!user) {
        if (useUser.type === NameUser.Client) {
            user = useUser.user = new Client();
        } else if (useUser.type === NameUser.Adviser) {
            user = useUser.user = new Adviser();
        } else {
            useUser.type = NameUser.Client;
            user = useUser.user = new Client();
        }
    }
    
    var client: Client | undefined = useUser.getClient();
    var asesor: Adviser | undefined = useUser.getAsesor();


    const [step, stepStep] = useState<number>(1);
    const [update, setUpdate] = useState(false);


    const next = () => {
      
        let allowNext = false;
        if (user) {
            switch (step) {
                case 1:
                    if (user.name != "" && user.lastName != "" && user.cedula != "") {
                        allowNext = true;
                    }
                    break;
                case 2:
                    if(client){
                        if (client.clientType != "" && client.legalName != "" && client.NIT != "") {
                            allowNext = true;
                        }
                    }
                    break;
            }

        }

        if (allowNext) {
            stepStep(step + 1);
        }

    }

    const back = () => {

    }

    const changeInput = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && user) {
            switch (type) {
                case REGISTER.NAME:
                    user.name = event.target.value;
                    break;
                case REGISTER.LASTNAME:
                    user.lastName = event.target.value;
                    break;
                case REGISTER.CEDULA:
                    user.cedula = event.target.value;
                    break;
                case REGISTER.EMAIL:
                    user.email = event.target.value;
                    break;

                case REGISTER.LEGAL_NAME:
                    if (client) {
                        client.legalName = event.target.value;
                    }
                    break;
                case REGISTER.NIT:
                    if (client) {
                        client.NIT = event.target.value;
                    }
                    break;
            }
        }
    }

    const changeForm = () => {
        let userclientes: HTMLInputElement[] = document.getElementsByName("usercliente") as any;
        let tipoCliente: HTMLInputElement[] = document.getElementsByName("tipoCliente") as any;
        if (client) {
            if (userclientes) {
                userclientes.forEach((userclient, i) => {
                    if (client && userclient.checked) {
                        client.requireService = userclient.value;
                    }
                });
            }
            if (tipoCliente) {
                tipoCliente.forEach((tipoClient, i) => {
                    if (client && tipoClient.checked) {
                        client.clientType = tipoClient.value;
                    }
                });
            }
        }
    };

    useEffect(() => {
        changeForm();
    }, [])

    const renderStep = (number: number) => {
        let view = <></>;

        switch (number) {
            case 1:
                view = <article className="RegisterComponent_one appear">
                    <div className="RegisterComponent_one__top">

                        <label className="RegisterComponent_one__top__label">
                            <p className="RegisterComponent_one__top__label__txt">Nombre</p>
                            <input onChange={(e) => { changeInput(REGISTER.NAME, e) }} className="RegisterComponent_one__top__label__input" type="text" name="namecliente" autoComplete="true" autoSave="true" autoFocus />
                        </label>

                        <label className="RegisterComponent_one__top__label">
                            <p className="RegisterComponent_one__top__label__txt">Apellido</p>
                            <input onChange={(e) => { changeInput(REGISTER.LASTNAME, e) }} className="RegisterComponent_one__top__label__input" type="text" name="lastnamecliente" autoComplete="true" autoSave="true" />
                        </label>

                    </div>

                    <div className="RegisterComponent_one__bottom">

                        <label className="RegisterComponent_one__bottom__label">
                            <p className="RegisterComponent_one__bottom__label__txt">Cédula de ciudadanía CC.</p>
                            <input onChange={(e) => { changeInput(REGISTER.CEDULA, e) }} className="RegisterComponent_one__bottom__label__input" type="number" name="idcliente" />
                        </label>

                        <form onSubmit={changeForm} className="RegisterComponent_one__bottom__label">
                            <p className="RegisterComponent_one__bottom__label__txt">¿Eres quien hará uso del servicio?</p>

                            <div className="RegisterComponent_one__bottom__label-input">
                                <label>
                                    <input onClick={() => { changeForm() }} className="RegisterComponent_one__bottom__label__input" type="radio" name="usercliente" value="true" /> Si
                                        <span className="checkmark"></span>
                                </label>
                                <label>
                                    <input onClick={() => { changeForm() }} className="RegisterComponent_one__bottom__label__input" type="radio" name="usercliente" value="false" /> No
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                        </form>

                    </div>
                    <div className="RegisterComponent_one__btns">
                        <button onClick={next} type="button" className="RegisterComponent_one__btns__btn">Siguiente</button>
                    </div>
                </article>;
                break;
            case 2:
                view = <article className="RegisterComponent_two appear">
                    <div className="RegisterComponent_two__top">
                        <p className="RegisterComponent_two__top__txt">Tipo de Cliente</p>

                        <div className="RegisterComponent_two__top__inputs">

                            <label className="RegisterComponent_two__top__inputs__label">
                                <input onClick={() => { changeForm() }} className="RegisterComponent_two__top__inputs__label__input" type="radio" name="tipoCliente" value={REGISTER.TYPE_CLIENT_NATURAL} /> Individuo o cliente natural
                                <span className="checkmark"></span>
                            </label>

                            <label className="RegisterComponent_two__top__inputs__label">
                                <input onClick={() => { changeForm() }} className="RegisterComponent_two__top__inputs__label__input" type="radio" name="tipoCliente" value={REGISTER.TYPE_CLIENT_CONTRUCTORA} /> Constructora
                                <span className="checkmark"></span>
                            </label>

                        </div>

                    </div>

                    <div className="RegisterComponent_two__bottom">
                        <h1 className="RegisterComponent_two__bottom__title"> Responde la siguiente información si el servicio es para una <strong>empresa</strong> </h1>
                        <div className="RegisterComponent_two__bottom__inputs">
                            <label className="RegisterComponent_two__bottom__inputs__label">
                                <p className="RegisterComponent_two__bottom__inputs__label__txt">Nombre Jurídico</p>
                                <input onChange={(e) => { changeInput(REGISTER.LEGAL_NAME, e) }} type="text" name="nombrejuridico" />
                            </label>

                            <label className="RegisterComponent_two__bottom__inputs__label">
                                <p className="RegisterComponent_two__bottom__inputs__label__txt">NIT</p>
                                <input onChange={(e) => { changeInput(REGISTER.NIT, e) }} type="number" name="nit" />
                            </label>
                        </div>

                    </div>

                    <div className="RegisterComponent_two__btns">
                        <button onClick={back} type="button" className="RegisterComponent_two__btns__btn">Atrás</button>
                        <button onClick={next} type="button" className="RegisterComponent_two__btns__btn">Siguiente</button>
                    </div>
                </article>;
                break;
            case 3:
                break;

            default:
                break;
        }

        return view;
    }

    return renderStep(step);
}

export default RegisterComponent;

var REGISTER = {
    NAME: "nombre",
    LASTNAME: "lastname",
    EMAIL: "email",
    PASS: "pass",
    CEDULA: "cedula",
    LEGAL_NAME: "nombre juridico",
    NIT: "nit",
    TYPE_CLIENT_NATURAL: "Individuo o cliente natural",
    TYPE_CLIENT_CONTRUCTORA: "Individuo o cliente natural",


}