import HeaderNav from "./HeaderNav"
import "../assets/css/Payment.css"
import { useState } from "react"

export default function PaymentMethods({ cart, convertPrice, totalPrice }) {
    const [paymentMethod, setPaymentMethod] = useState("");
    const handleClickPaymentOnPlace = () => {
        setPaymentMethod("En el lugar")
    }
    const handleClickPaymentOnline = () => {
        setPaymentMethod("En linea")
    }

    return (
        <>
            <header>
                <HeaderNav title={'Zona de pago'} />
            </header>
            <main>
                <section className="container text-center">
                    <article className="card m-3">
                        <div className="card-body">
                            <div className="row row-payment d-flex align-items-center">
                                <div className="col-6">
                                    <strong>Total a pagar: </strong>
                                </div>
                                <div className="col-6">
                                    <span>{totalPrice}$</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                        <header className="text-center">
                            <hr />
                            <h3 className="display-6">Elige como deseas realizar tu pago</h3>
                            <hr />
                        </header>
                        <main>
                            <section>
                                <article className="row">
                                    <div className="col-lg-3">
                                        <div className="row flex-column">
                                            <div className="col-6 d-flex justify-content-start">
                                                <div className="row">
                                                    <button className="btn btn-dark btn-lg" onClick={handleClickPaymentOnPlace}>Pago en el lugar</button>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-2 d-flex justify-content-start">
                                                <div className="row">
                                                    <button className="btn btn-dark btn-lg" onClick={handleClickPaymentOnline}>Pago en línea</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">

                                    </div>
                                </article>
                            </section>
                        </main>
                    </article>
                </section>
            </main>
        </>
    )
}