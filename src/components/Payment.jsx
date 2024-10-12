import HeaderNav from "./HeaderNav";
import "../assets/css/Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterN from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export default function PaymentMethods({ cart, totalPrice, removeItems }) {
    const [paymentMethod, setPaymentMethod] = useState("form-payment-method"); //state para abrir formularios de metodos de pago
    const [isActive, setIsActive] = useState("INACTIVO"); //state para determinar si el formulario de pago en linea esta activo
    const [isActiveStyle, setIsActiveStyle] = useState("strong-isInactive"); //state para cambiar de color el texto del estado de pago en linea
    const [isDisabled, setIsDisabled] = useState("btn btn-info"); //state que controla donde aparecera el boton dependiendo si es pago en linea o en el lugar
    const [spinnerOn, setSpinnerOn] = useState("spinner-border mt-3");

    //states para capturar el valor ingresado en cada campo
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneN, setPhoneN] = useState("");
    const [cardN, setCardN] = useState("");
    const [monthEx, setMonthEx] = useState("");
    const [yearEx, setYearEx] = useState("");
    const [cvN, setCvN] = useState("");

    const returnPrev = useNavigate(); //Navegacion hacia el carrito o las confirmaciones de pago
    const removeAfterPay = () => { //Funcion para eliminar el carrito despues de pagar
        return cart.map(({ id }) => {
            removeItems(id);
        })
    }
    const navigateToConfirm = () => { //Funcion para navegar al componente de confirmacion de pago en el lugar
        returnPrev("/payment-confirmation");
        removeAfterPay();
    }
    const navigateToConfirm2 = () => { //Funcion para navegar al componente de confirmacion de pago en linea 
        returnPrev("/payment-confirmation-online");
        removeAfterPay();
    }
    const clearOnPlaceForm = () => {
        //Funcion que limpia los campos del formulario de pago en el lugar
        setName("");
        setEmail("");
        setPhoneN("");
    };
    const validationOnPlaceForm = () => { //Validaciones para pago en el lugar
        return name == "" || email == "" || phoneN == ""
            ? alert(
                `Uno o más campos no se han completado. Por favor, rellenar con la información solicitada`
            )
            : !/^[0-9]{4}\s[0-9]{4}$/.test(phoneN)
                ? alert("El número de teléfono es inválido o posee el formato incorrecto")
                : navigateToConfirm();
    };
    const validationOnlineForm = () => { //Validaciones para pago en linea
        return name == "" ||
            email == "" ||
            phoneN == "" ||
            cardN == "" ||
            monthEx == "" ||
            yearEx == "" ||
            cvN == ""
            ? alert(
                `Uno o más campos no se han completado. Por favor, rellenar con la información solicitada`
            )
            : !/^[0-9]{4}\s[0-9]{4}$/.test(phoneN)
                ? alert("El número de teléfono es inválido o posee el formato incorrecto")
                : !/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/.test(cardN)
                    ? alert("El número de tarjeta ingresado no es válido")
                    : !/^[0-9]{2}$/.test(monthEx)
                        ? alert("El mes debe ser ingresado en formato de 2 dígitos")
                        : (monthEx < 1 || monthEx > 12)
                            ? alert('El mes ingresado no es válido')
                            : !/^[0-9]{4}$/.test(yearEx)
                                ? alert("El año debe ser ingresado en formato de 4 dígitos")
                                : !/^[0-9]{3}$/.test(cvN)
                                    ? alert("El CV ingresado no es válido")
                                    : navigateToConfirm2();
    };
    const handleClickRequestOnPlace = () => {
        validationOnPlaceForm();
    };
    const handleClickRequestOnline = () => {
        validationOnlineForm();
    };
    const handleSubmit = (e) => {
        //Previene que el formulario se refresque automaticamente
        e.preventDefault();
    };
    const handleClickPaymentOnPlace = () => {
        //Funcion para controlar funcionalidades del pago en el lugar
        setPaymentMethod("form-payment-method");
        setIsActive("INACTIVO");
        setIsActiveStyle("strong-isInactive");
        setIsDisabled("btn btn-info");
        setCardN("");
        setMonthEx("");
        setYearEx("");
        setCvN("");
    };
    const handleClickPaymentOnline = () => {
        //Funcion para controlar funcionalidades del pago en linea
        setPaymentMethod("div-form");
        setIsActive("ACTIVO");
        setIsActiveStyle("strong-isActive");
        setIsDisabled("btn-save-info");
    };
    const handleClickReturn = () => {
        returnPrev("/cart");
    };
    return (
        <>
            <header>
                <HeaderNav title={"Zona de pago"} />
            </header>
            <main className="main-xl-payment">
                <section className="container">
                    <article className="card text-center m-3">
                        <div className="card-body">
                            <div className="row row-return-cart">
                                <div className="col-12 text-start">
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={handleClickReturn}
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                                        <span className="m-3">Volver al carrito</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row row-title">
                                <div className="col-12 mt-3 mb-3">
                                    <h1 className="h1">Resumen del pedido</h1>
                                </div>
                            </div>
                            <div className="row row-payment">
                                <div className="col-sm-12 col-md-8 col-lg-8 col-payment">
                                    {cart.map(({ id, sectionName, cantidad }) => (
                                        <p key={id}>
                                            {sectionName} - {cantidad}&times;
                                        </p>
                                    ))}
                                    <hr />
                                    <strong>Total a pagar: </strong>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 col-payment">
                                    {cart.map(({ id, price }) => (
                                        <p key={id}>{price}</p>
                                    ))}
                                    <hr />
                                    <p>{totalPrice}$</p>
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
                                                    <button
                                                        className="btn btn-dark btn-lg"
                                                        onClick={handleClickPaymentOnPlace}
                                                    >
                                                        Pago en el lugar
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="row g-3 text-center">
                                                    <button
                                                        className="btn btn-outline-dark btn-lg"
                                                        onClick={handleClickPaymentOnline}
                                                        onChange={handleClickPaymentOnline}
                                                    >
                                                        Pago en línea
                                                    </button>
                                                    <span>
                                                        Método de pago en línea:{" "}
                                                        <strong className={isActiveStyle}>
                                                            {isActive}
                                                        </strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-9 col-xl-payment">
                                        <h2 className="h2">Información de contacto</h2>
                                        <p>
                                            Por favor, introducir la siguiente información personal
                                            para la toma de su orden a continuación.
                                        </p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3 form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nombre"
                                                    id="nombre"
                                                    aria-describedby="nombre_user"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                ></input>
                                                <label htmlFor="nombre">Nombre</label>
                                            </div>
                                            <div className="mb-3 form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="name@example.com"
                                                    id="email"
                                                    aria-describedby="email_user"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                ></input>
                                                <label htmlFor="email">Correo electrónico</label>
                                            </div>
                                            <div className="mb-3 form-floating">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="0000-0000"
                                                    id="telefono"
                                                    aria-describedby="phone_user"
                                                    value={phoneN}
                                                    onChange={(e) => setPhoneN(e.target.value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || e.target.value)}
                                                    maxLength={9}
                                                    required
                                                ></input>
                                                <div className="valid-tooltip">
                                                    Good pa
                                                </div>
                                                <label htmlFor="telefono">Número de teléfono</label>
                                                <p className="form-text">
                                                    Formato de número de teléfono válido: 0000 0000
                                                </p>
                                            </div>
                                            <div className="mb-">
                                                <input
                                                    type="submit"
                                                    className={isDisabled}
                                                    value={"Guardar información"}
                                                    onClick={handleClickRequestOnPlace}
                                                ></input>
                                                <button
                                                    className="btn btn-secondary m-1"
                                                    onClick={clearOnPlaceForm}
                                                >
                                                    Limpiar formulario
                                                </button>
                                            </div>
                                        </form>
                                        {/* Para informacion de tarjeta */}
                                        <div className={paymentMethod}>
                                            <hr />
                                            <h2 className="h2">Información de la tarjeta</h2>
                                            <p>
                                                Por favor, introducir la siguiente información para el
                                                método de pago en línea
                                            </p>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3 form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="cardNumber"
                                                        id="cardN"
                                                        aria-describedby="card_Number"
                                                        value={cardN}
                                                        onChange={(e) => setCardN(e.target.value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || e.target.value)}
                                                        maxLength={19}
                                                        required
                                                    ></input>
                                                    <label htmlFor="cardN">Número de la tarjeta</label>
                                                    <p className="form-text">
                                                        Formato de número de tarjeta válido: 0000 0000 0000 0000
                                                    </p>
                                                </div>
                                                <div className="expiration-date d-flex">
                                                    <div className="m-1">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="mm"
                                                            id="monthC"
                                                            aria-describedby="month_card"
                                                            value={monthEx}
                                                            onChange={(e) => setMonthEx(e.target.value)}
                                                            maxLength={2}
                                                            required
                                                        ></input>
                                                        <label htmlFor="monthC">Mes de expiración</label>
                                                    </div>
                                                    <div className="m-1">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="aaaa"
                                                            id="yearC"
                                                            aria-describedby="month_card"
                                                            value={yearEx}
                                                            onChange={(e) => setYearEx(e.target.value)}
                                                            maxLength={4}
                                                            required
                                                        ></input>
                                                        <label htmlFor="yearC">Año de expiración</label>
                                                    </div>
                                                </div>
                                                <p className="form-text">
                                                    Nota: ingresar año de expiración de la tarjeta en
                                                    formato de 4 dígitos
                                                </p>
                                                <div className="mb-3 form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="000"
                                                        id="cvN"
                                                        aria-describedby="cv_number"
                                                        value={cvN}
                                                        onChange={(e) => setCvN(e.target.value)}
                                                        maxLength={3}
                                                        required
                                                    ></input>
                                                    <label htmlFor="cvN">CV</label>
                                                    <p className="form-text">
                                                        Su información no será compartida a terceros
                                                    </p>
                                                </div>
                                                <div className="mb-3">
                                                    <div>
                                                        <input
                                                            type="submit"
                                                            className="btn btn-success"
                                                            value={"Realizar pago"}
                                                            onClick={handleClickRequestOnline}
                                                        ></input>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </main>
                    </article>
                </section>
            </main>
            <FooterN />
        </>
    );
}
