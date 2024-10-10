import HeaderNav from "./HeaderNav"
import FooterN from "./footer"
import "../assets/css/PaymentConfirm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router-dom";

export default function PaymentConfirmation() {
    const navigateMenu = useNavigate(); //Hook de navegacion para volver al menu
    const returnToMenu = () => { navigateMenu("/menu") } //Funcion para volver al menu
    return (
        <>
            <header>
                <HeaderNav title={'Confirmación de pedido'} />
            </header>
            <main className="main-md-confirm text-center">
                <section className="container div-md-confirm">
                    <h1 className="display-1">¡Su pedido ha sido realizado con éxito!</h1>
                    <p>Con esta confirmación, puede acercarse a nuestras instalaciones y realizar el respectivo pago EN EFECTIVO</p>
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