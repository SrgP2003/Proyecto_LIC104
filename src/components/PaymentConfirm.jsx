import HeaderNav from "./HeaderNav"
import FooterN from "./footer"
import "../assets/css/PaymentConfirm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router-dom";

export function PaymentConfirmation() {
    const navigateMenu = useNavigate(); //Hook de navegacion para volver al menu
    const returnToMenu = () => { navigateMenu("/menu") } //Funcion para volver al menu

    return (
        <>
            <header>
                <HeaderNav title={'Confirmación'} />
            </header>
            <main className="main-md-confirm text-center">
                <section className="container div-md-confirm">
                    <h1 className="display-3">¡Su pedido ha sido realizado con éxito!</h1>
                    <p>Con esta confirmación, puede acercarse a nuestras instalaciones y realizar el respectivo pago EN EFECTIVO.
                    Al llegar, se solicitará reportarse brindado el nombre al que se encuentra su orden.</p>
                    <p>¡Muchas gracias por preferirnos!</p>
                </section>
                <section className="btn-return-menu">
                    <button className="btn btn-outline-dark btn-lg m-3" onClick={returnToMenu}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        <span className="m-3">Volver al menú</span>
                    </button>
                </section>
            </main>
            <FooterN />
        </>
    )
}
export function PaymentConfirmation2() {
    const navigateMenu = useNavigate(); //Hook de navegacion para volver al menu
    const returnToMenu = () => { navigateMenu("/menu") } //Funcion para volver al menu
    let dateTransact = new Date();
    let currentDate = `${dateTransact.getDate()}/${dateTransact.getMonth() + 1}/${dateTransact.getFullYear()} | ${dateTransact.getHours()}:${dateTransact.getMinutes()}`;
    return (
        <>
            <header>
                <HeaderNav title={'Confirmación de pedido'} />
            </header>
            <main className="main-md-confirm text-center">
                <section className="container div-md-confirm">
                    <h1 className="display-3">¡Transacción realizada con éxito!</h1>
                    <article className="card m-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                    <p><strong>Fecha y hora:</strong></p>
                                    <p>{currentDate}</p>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <p><strong> Número transacción:</strong></p>
                                    <p>{String(Math.random()).split('').slice(2, 9).join('')}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <p>Con este comprobante, debe acercarse a nuestras instalaciones y presentarlo al momento de recoger su pedido.</p>
                    <p>Nota: el tiempo aproximado de espera para todos los pedidos es de 30 minutos a 1 hora.</p>
                    <p>¡Muchas gracias por preferirnos!</p>
                </section>
                <section className="btn-return-menu">
                    <button className="btn btn-outline-dark btn-lg m-3" onClick={returnToMenu}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                        <span className="m-3">Volver al menú</span>
                    </button>
                </section>
            </main>
            <FooterN />
        </>
    )
}