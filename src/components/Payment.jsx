import HeaderNav from "./HeaderNav"
import "../assets/css/Payment.css"
import { useState } from "react"
import FooterN from "./footer";

export default function PaymentMethods({ cart, convertPrice, totalPrice }) {
    const [paymentMethod, setPaymentMethod] = useState("");
    const OnPlaceForm = () => {
        return (
            <>
                <h2 className="h2">Información de contacto</h2>
                <form>
                    <div className="mb-3 form-floating">
                        <input type="text" className="form-control" placeholder="Nombre" id="nombre" aria-describedby="nombre_user" required></input>
                        <label htmlFor="nombre">Nombre</label>
                        <p className="form-text">Su información no será compartida a terceros</p>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="email" className="form-control" placeholder="name@example.com" id="email" aria-describedby="email_user" required></input>
                        <label htmlFor="email">Correo electrónico</label>
                        <p className="form-text">Su información no será compartida a terceros</p>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="tel" className="form-control" placeholder="0000-0000" id="telefono" aria-describedby="phone_user" required></input>
                        <label htmlFor="telefono">Número de teléfono</label>
                        <p className="form-text">Su información no será compartida a terceros</p>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-info" value={"Guardar información"}></input>
                    </div>
                </form>
            </>
        )
    }
    const handleClickPaymentOnPlace = () => {
        setPaymentMethod(<OnPlaceForm />)
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
                <section className="container">
                    <article className="card text-center m-3">
                        <div className="card-body">
                            <div className="row row-payment">
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
                                    <div className="col-md-12 col-lg-12 mb-3">
                                        <div className="row row-btn-payment">
                                            <div className="col-6">
                                                <div className="row mb-2 g-3">
                                                    <button className="btn btn-outline-dark btn-lg" onClick={handleClickPaymentOnPlace}>Pago en el lugar</button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="row g-3">
                                                    <button className="btn btn-outline-dark btn-lg" onClick={handleClickPaymentOnline}>Pago en línea</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-9">
                                        {paymentMethod}
                                    </div>
                                </article>
                            </section>
                        </main>
                    </article>
                </section>
            </main>
            <FooterN />
        </>
    )
}