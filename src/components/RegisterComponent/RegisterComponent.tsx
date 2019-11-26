import React, { useState, useContext, useEffect } from 'react';
import './RegisterComponent.scss';
import UserContext from '../../hooks/UserContext';
import { NameUser } from '../../hooks/UserContext';
import Client from '../../objects/User/Client';
import Adviser from '../../objects/User/Adviser';
import ReactModal from 'react-modal';
import { Redirect } from 'react-router';
import * as Routes from '../../constants/Routes';

ReactModal.setAppElement('#root');

interface IPropsRegisterComponent {
    step: number;
    setStep: Function;
}

const RegisterComponent = (props: IPropsRegisterComponent) => {

    var useUser = useContext(UserContext);
    let user = useUser.user;

    if (!user) {
        if (useUser.type === NameUser.Client) {
            user = useUser.user = new Client();
            user.type = useUser.type;
        } else if (useUser.type === NameUser.Adviser) {
            user = useUser.user = new Adviser();
            user.type = useUser.type;
        }

    }

    var client: Client | undefined = useUser.getClient();
    //var asesor: Adviser | undefined = useUser.getAsesor();


    const [step, stepStep] = [props.step, props.setStep];
    var [password, setPassword] = useState("");
    var [repassword, setRepassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const finalizar = () => {
        if (password !== "" && password === repassword && useUser.user && useUser.user.email !== "") {
            if (showModal && useUser.user) {
                //useUser.user.email = `${useUser.user.cedula}@hotmail.com`;
                useUser.singUp(useUser.user.email, password, () => {
                    setRedirect(true);
                });
            }
            setShowModal(true);
        }
    }

    const closeFinalizar = () => {
        setShowModal(false);
    }

    const next = () => {

        let allowNext = false;

        if (user) {
            if (user.type === NameUser.Client) {
                switch (step) {
                    case 1:
                        if (user.name !== "" && user.lastName !== "" && user.cedula !== "" && client && client.requireService !== "") {
                            allowNext = true;
                        }
                        break;
                    case 2:
                        if (client) {
                            if (client.clientType !== "" && client.legalName !== "" && client.NIT !== "") {
                                allowNext = true;
                            }

                            if (client.clientType === REGISTER.TYPE_CLIENT_NATURAL) {
                                allowNext = true;
                            }
                        }
                        break;
                }
            } else if (user.type === NameUser.Adviser) {
                switch (step) {
                    case 1:
                        if (user.name !== "" && user.lastName !== "" && user.cedula !== "") {
                            allowNext = true;
                        }
                        break;
                    case 2:
                        allowNext = true;
                        break;
                }
            }

        }

        if (allowNext) {
            stepStep(step + 1);
        }

    }

    const back = () => {
        stepStep(step - 1);
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
                            <input onChange={(e) => { changeInput(REGISTER.NAME, e) }} className="RegisterComponent_one__top__label__input" type="text" name="namecliente" autoComplete="true" autoSave="true" autoFocus
                                defaultValue={user ? user.name : ""} />
                        </label>

                        <label className="RegisterComponent_one__top__label">
                            <p className="RegisterComponent_one__top__label__txt">Apellido</p>
                            <input onChange={(e) => { changeInput(REGISTER.LASTNAME, e) }} className="RegisterComponent_one__top__label__input" type="text" name="lastnamecliente" autoComplete="true" autoSave="true"
                                defaultValue={user ? user.lastName : ""} />
                        </label>

                    </div>

                    <div className="RegisterComponent_one__bottom">

                        <label className="RegisterComponent_one__bottom__label">
                            <p className="RegisterComponent_one__bottom__label__txt">Cédula de ciudadanía CC.</p>
                            <input onChange={(e) => { changeInput(REGISTER.CEDULA, e) }} className="RegisterComponent_one__bottom__label__input" type="number" name="idcliente"
                                defaultValue={user ? user.cedula : ""} />
                        </label>

                        <form onSubmit={changeForm} className="RegisterComponent_one__bottom__label">
                            <p className="RegisterComponent_one__bottom__label__txt">¿Eres quien hará uso del servicio?</p>

                            <div className="RegisterComponent_one__bottom__label-input">
                                <label>
                                    <input onClick={() => { changeForm() }} className="RegisterComponent_one__bottom__label__input" type="radio" name="usercliente" value="true" defaultChecked={client ? client.requireService === "true" ? true : false : true} /> Si
                                        <span className="checkmark"></span>
                                </label>
                                <label>
                                    <input onClick={() => { changeForm() }} className="RegisterComponent_one__bottom__label__input" type="radio" name="usercliente" value="false"
                                        defaultChecked={client ? client.requireService === "false" ? true : false : false} /> No
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
                                <input onClick={() => { changeForm() }} className="RegisterComponent_two__top__inputs__label__input" type="radio" name="tipoCliente" value={REGISTER.TYPE_CLIENT_NATURAL}
                                    defaultChecked={client ? client.clientType === REGISTER.TYPE_CLIENT_NATURAL ? true : false : undefined} /> Individuo o cliente natural
                                <span className="checkmark"></span>
                            </label>

                            <label className="RegisterComponent_two__top__inputs__label">
                                <input onClick={() => { changeForm() }} className="RegisterComponent_two__top__inputs__label__input" type="radio" name="tipoCliente" value={REGISTER.TYPE_CLIENT_CONTRUCTORA}
                                    defaultChecked={client ? client.clientType === REGISTER.TYPE_CLIENT_CONTRUCTORA ? true : false : undefined} /> Constructora

                                <span className="checkmark"></span>
                            </label>

                        </div>

                    </div>

                    <div className="RegisterComponent_two__bottom">
                        <h1 className="RegisterComponent_two__bottom__title"> Responde la siguiente información si el servicio es para una <strong>empresa</strong> </h1>
                        <div className="RegisterComponent_two__bottom__inputs">
                            <label className="RegisterComponent_two__bottom__inputs__label">
                                <p className="RegisterComponent_two__bottom__inputs__label__txt">Nombre Jurídico</p>
                                <input onChange={(e) => { changeInput(REGISTER.LEGAL_NAME, e) }} defaultValue={client ? client.legalName : ""} type="text" name="nombrejuridico" />
                            </label>

                            <label className="RegisterComponent_two__bottom__inputs__label">
                                <p className="RegisterComponent_two__bottom__inputs__label__txt">NIT</p>
                                <input onChange={(e) => { changeInput(REGISTER.NIT, e) }} type="number"
                                    defaultValue={client ? client.NIT : ""} name="nit" />
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
                view = <article className="RegisterComponent_three appear">
                    {redirect ? <Redirect to={Routes.CASES} /> : ""}
                    <p className="RegisterComponent_three__txt">
                        Crea una contraseña de al menos <strong>4 números</strong> para proteger tus datos personales.
                </p>
                    <p className="RegisterComponent_three__txt">
                        Con esta podrás acceder a Lumen y ver el progreso de tu proyecto.
                </p>

                    <div className="RegisterComponent_three__bottom">
                        <label className="RegisterComponent_three__bottom__inputs__label">
                            <p className="RegisterComponent_three__bottom__inputs__label__txt">Email:</p>
                            <input onChange={(e) => changeInput(REGISTER.EMAIL, e)} type="email" name="contrasena"
                                defaultValue={client ? client.email : ""} />
                        </label>
                    </div>

                    <div className="RegisterComponent_three__bottom">
                        <label className="RegisterComponent_three__bottom__inputs__label">
                            <p className="RegisterComponent_three__bottom__inputs__label__txt">Contraseña</p>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="contrasena"
                                defaultValue={password} />
                        </label>

                        <label className="RegisterComponent_three__bottom__inputs__label">
                            <p className="RegisterComponent_three__bottom__inputs__label__txt">Confirmar Contraseña</p>
                            <input onChange={(e) => setRepassword(e.target.value)} type="password"
                                defaultValue={repassword} name="confirmarcontrasena" />
                        </label>
                    </div>

                    <div className="RegisterComponent_two__btns">
                        <button onClick={back} type="button" className="RegisterComponent_three__btns__btn">Atrás</button>
                        <button type="button" className="RegisterComponent_three__btns__btn" onClick={finalizar}>Finalizar</button>
                    </div>

                    <ReactModal
                        isOpen={showModal}
                        contentLabel="Confirmar Registro"
                        className="Modal"
                        overlayClassName="Overlay">
                        <h1>¿Estás seguro que deseas finalizar el formulario?</h1>
                        <p>Puedes devolverte y revisar que los datos sean los correctos antes de enviar el formulario de registro.</p>
                        <div className="RegisterComponent_two__btns">
                            <button type="button" className="RegisterComponent_three__btns__btn" onClick={closeFinalizar}>Revisar</button>
                            <button onClick={finalizar} type="button" className="RegisterComponent_three__btns__btn" >Finalizar</button>
                        </div>
                    </ReactModal>
                </article>
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