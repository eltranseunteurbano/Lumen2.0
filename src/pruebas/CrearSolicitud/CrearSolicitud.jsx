import React from 'react';
import './CrearSolicitud.scss';
import HeaderSolicitud from '../../containers/Task/HeaderSolicitud/HeaderSolicitud';

const CrearSolicitud = () => {

    const refCanvas = React.useRef();
    const refCanvasImg = React.useRef();


    var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        x = null,
        y= null,
        w = 0,
        h = 0,
        dot_flag = false;

        /*React.useEffect( () => {
            canvas = refCanvas.current;
            ctx = canvas.getContext('2d');
            w = canvas.width;
            h = canvas.height;
            console.log(ctx,w,h);
            canvas.addEventListener("mousemove", function (e) {
                findxy('move', e)
            }, false);
            
        })

    function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }

    const findxy = (res, e) => {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }

    const erase = () => {
        ctx.clearRect(0, 0, w, h);
        refCanvasImg.current.style.display = 'none';
        
    }


    return(
        <section className="CrearSolicitud">

            <HeaderSolicitud />
            {/* Paso 1*/
            <article className="CrearSolicitud__pregunta">
                <div className="CrearSolicitud__pregunta__texto">
                    <p className="CrearSolicitud__pregunta__texto__txt">
                        <strong>1. </strong> El servicio de energía es para:
                    </p>
                </div>
                
                <div className="CrearSolicitud__pregunta__opciones">
                    
                    <div className="CrearSolicitud__pregunta__opciones__opcion">
                        <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                            <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-empresa.png'} alt="Icono"/>
                        </div>
                        <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Empresa</p>
                    </div>

                    <div className="CrearSolicitud__pregunta__opciones__opcion">
                        <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                            <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono"/>
                        </div>
                        <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Casa</p>
                    </div>
                </div>
                
                <div className="CrearSolicitud__pregunta__btns">
                    <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                    <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                </div>
            </article>}

            */}{/* Paso 2**/
            /*<article className="CrearSolicitud__pregunta">
                <div className="CrearSolicitud__pregunta__texto">
                    <p className="CrearSolicitud__pregunta__texto__txt">
                        <strong>2. </strong> Elige un nombre para tu proyecto. Te recomendamos usar el nombre del barrio en donde se vaya a realizar
                    </p>
                </div>
                
                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Nombre del proyecto</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Nombre del pryecto"/>
                    </label>
                </div>
                
                <div className="CrearSolicitud__pregunta__btns">
                    <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                    <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                </div>
            </article>*/}

            {/* Paso 3  **/
           /* <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>3. </strong> ¿En qué zona se encuentra tu vivienda o proyecto?
                </p>
            </div>
            
            <div className="CrearSolicitud__pregunta__opciones">
                
                <div className="CrearSolicitud__pregunta__opciones__opcion">
                    <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                        <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-ciudad.png'} alt="Icono"/>
                    </div>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Urbana</p>
                </div>

                <div className="CrearSolicitud__pregunta__opciones__opcion">
                    <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                        <img src={process.env.PUBLIC_URL + '/img/tasks/location/icon-rural.png'} alt="Icono"/>
                    </div>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Rural</p>
                </div>
            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>/**/}

        {/* Paso 4*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>4. </strong> Por favor digita en los campos los datos del electricista que te ayudará en tu proyecto.
                </p>
            </div>

            <div className="CrearSolicitud__pregunta__input-contenedor">

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Nombre</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Nombre"/>
                    </label>

                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Apellido</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Apellido"/>
                    </label>
                </div>

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Cédula de ciudadanía</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="number" placeholder="Cédula de ciudadanía"/>
                    </label>

                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Número de tarjeta profesional</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="number" placeholder="Número de tarjeta profesional"/>
                    </label>
                </div>

            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>*/}

        {/* Paso 5  *//*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>5. </strong> ¿Qué tipo de electrodomésticos tienes en tu vivienda o propiedad?
                </p>
            </div>
            
            <div className="CrearSolicitud__pregunta__opciones">
                
                <div className="CrearSolicitud__pregunta__opciones__opcion">
                    <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                        <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-1.svg'} alt="Icono"/>
                    </div>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__description">1x120V</p>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Monofásica</p>
                </div>

                <div className="CrearSolicitud__pregunta__opciones__opcion">
                    <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                        <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-2.svg'} alt="Icono"/>
                    </div>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__description">2x120/240V</p>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Monofásica</p>
                </div>

                <div className="CrearSolicitud__pregunta__opciones__opcion">
                    <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                        <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-3.svg'} alt="Icono"/>
                    </div>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__description">2x120/208V</p>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Trifásica</p>
                </div>

                <div className="CrearSolicitud__pregunta__opciones__opcion">
                    <div className="CrearSolicitud__pregunta__opciones__opcion__img">
                        <img src={process.env.PUBLIC_URL + '/img/tasks/electrodomesticos/electrodomestico-4.svg'} alt="Icono"/>
                    </div>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__description">3x120/208V</p>
                    <p className="CrearSolicitud__pregunta__opciones__opcion__texto">Trifásica</p>
                </div>
            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>/**/}

        {/* Paso 6*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>6. </strong> Información del predio.
                </p>
            </div>
            
            <div className="CrearSolicitud__pregunta__input-contenedor">

            <div className="CrearSolicitud__pregunta__input">
                <div className="CrearSolicitud__pregunta__input__label">
                    <p className="CrearSolicitud__pregunta__input__label__text" style={{fontSize: '20px', fontWeight: 'normal'}}>El número predial es un código con 30 caracteres (números y letras) que sirve para ubicar y referenciar un inmueble o propiedad.</p>
                </div>

                <div className="CrearSolicitud__pregunta__input__label">
                    <img src={process.env.PUBLIC_URL + '/img/tasks/documento-predial.png'} alt="Ejemplo predial"/>
                    <p className="CrearSolicitud__pregunta__input__label__text" style={{fontSize: '14px', fontWeight: 'normal', color: '#F07500', marginTop: '20px'}}>Nota: Si tu propiedad no cuenta con número predial, entonces puedes adjuntar la documentación que confirme la veracidad del poseedor.</p>
                </div>
            </div>

        </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>*/}

        {/* Paso 6*
            <article className="CrearSolicitud__pregunta">
                <div className="CrearSolicitud__pregunta__texto">
                    <p className="CrearSolicitud__pregunta__texto__txt">
                        <strong>6. </strong> Información del predio.
                    </p>
                </div>
                
                <div className="CrearSolicitud__pregunta__input-contenedor">

                <div className="CrearSolicitud__pregunta__input">
                    <div className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text" style={{fontWeight: 'normal', fontSize: '20px'}}> <strong style={{color: '#F07500'}}>*</strong> Por favor <strong>escribe, escanea y adjunta</strong> el Número Predial de tu propiedad o la documentación que confirme la veracidad del poseedor.</p>
                    </div>
                </div>

                <br />
                <br />

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Número Predial de tu propiedad</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="number" placeholder="Número Predial de tu propiedad"/>
                    </label>
                </div>

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Añadir archivo</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="file"/>
                    </label>
                </div>

            </div>
                
                <div className="CrearSolicitud__pregunta__btns">
                    <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                    <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
                </div>
        </article>*/}

        {/* Paso 6*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>6. </strong> Ubicación del predio.
                </p>
            </div>

            <div className="CrearSolicitud__pregunta__input-contenedor">

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Dirección</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Dirección"/>
                    </label>

                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Barrio</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Barrio"/>
                    </label>
                </div>

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Municipio</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Municipio"/>
                    </label>

                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Código factura del vecino</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="text" placeholder="Código factura del vecino"/>
                    </label>
                </div>

            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>*/}

        {/* Paso 7*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>7. </strong> Cédula del propietario
                </p>
            </div>

            <div className="CrearSolicitud__pregunta__input-contenedor">

                <div className="CrearSolicitud__pregunta__input">
                    <div className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text" style={{textAlign: 'center', marginBottom: '120px'}}>Por favor escanea la cédula de ciudadanía del propietario</p>
                    </div>
                </div>

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text">Añadir archivo</p>
                        <input className="CrearSolicitud__pregunta__input__label__input" type="file"/>
                    </label>
                </div>

            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>*/}

        {/* Paso 8*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>8. </strong> Autorización
                </p>
            </div>

            <div className="CrearSolicitud__pregunta__input-contenedor">

                <div className="CrearSolicitud__pregunta__input">
                    <div className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text" style={{textAlign: 'center', marginBottom: '120px', fontWeight: 'normal', fontSize: '20px'}}>Por favor <strong>firma</strong> en el siguiente recuadro blanco, para añadirla a tu solicitud</p>
                    </div>
                </div>

                <div className="CrearSolicitud__pregunta__input">
                    <label className="CrearSolicitud__pregunta__input__label">
                        <button className="CrearSolicitud__pregunta__input__label__input" type="button" style={{backgroundColor: '#B9DF47', color: '#ffffff', fontWeight: 'bolder', fontSize: '20px'}}> Si autorizo </button>
                    </label>

                    <label className="CrearSolicitud__pregunta__input__label">
                        <button className="CrearSolicitud__pregunta__input__label__input" type="button" style={{backgroundColor: '#FF5767', color: '#ffffff', fontWeight: 'bolder', fontSize: '20px'}}> No autorizo</button>
                    </label>
                </div>

            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>*/}

        {/* Paso 8*
            <article className="CrearSolicitud__pregunta">
            <div className="CrearSolicitud__pregunta__texto">
                <p className="CrearSolicitud__pregunta__texto__txt">
                    <strong>9. </strong> Firma solicitante
                </p>
            </div>

            <div className="CrearSolicitud__pregunta__input-contenedor">

                <div className="CrearSolicitud__pregunta__input">
                    <div className="CrearSolicitud__pregunta__input__label">
                        <p className="CrearSolicitud__pregunta__input__label__text" style={{textAlign: 'center', marginBottom: '120px', fontWeight: 'normal', fontSize: '20px'}}>Por favor <strong>firma</strong> en el siguiente recuadro blanco, para añadirla a tu solicitud</p>
                    </div>
                </div>

                <div className="CrearSolicitud__pregunta__input">
                    <div className="CrearSolicitud__pregunta__input__canvas">
                        <canvas ref={refCanvas} />
                        <img ref={refCanvasImg} style={{position:'absolute', top:'10%', left:'52%', display: 'none'}}/>
                    </div>

                </div>

                <div className="CrearSolicitud__pregunta__input">
                  <label className="CrearSolicitud__pregunta__input__label">
                        <button className="CrearSolicitud__pregunta__input__label__input" type="button" onClick={erase}> Reiniciar</button>
                    </label>

                </div>

            </div>
            
            <div className="CrearSolicitud__pregunta__btns">
                <button className="CrearSolicitud__pregunta__btns__btn"> Atrás</button>
                <button className="CrearSolicitud__pregunta__btns__btn"> Continuar</button>
            </div>
        </article>*/}

        
        </section>
    )
}

export default CrearSolicitud;