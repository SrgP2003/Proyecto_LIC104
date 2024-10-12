import HeaderNav from "./HeaderNav";
import "../assets/css/Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router-dom";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import FooterN from "./footer";

export default function Cart({ cart, removeItem, removeAll, totalPrice, convertPrice }) {
    const returnP = useNavigate(); //hook para navegacion entre componentes
    const handleClickReturn = () => { returnP('/menu') } //Navegacion hacia el menu
    const handlePayment = () => { returnP('/payment') } //Navegacion hacia zona de pago
    return (
        <>
            <header>
                <HeaderNav title={'Carrito'} />
            </header>
            <main className="main-xl-cart">
                <section className="container">
                    <article className="card m-3">
                    {/* Si no hay nada en el carrito, se muestra diseño para regresar al menu e indicar el inicio de una orden */}
                        {cart.length === 0 ?
                            <>
                                <div className="card-header d-flex justify-content-center text-center">
                                    <h4 className="h4">El carrito está actualmente vacío</h4>
                                </div>
                                <div className="cardBody">
                                    <div className="row">
                                        <div className="col-12 p-3 d-flex justify-content-center text-center">
                                            <p>Todos los productos elegidos del menú se mostrarán aquí</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1 d-flex justify-content-center">
                                    <button className="btn btn-info btn-lg w-50" onClick={handleClickReturn}>Agrega tu primer producto</button>
                                </div>
                               {/*  Si hay items agregados en el carrito, se muestra el resumen de lo ordenado */}
                            </> :
                            <ul>
                                <div className="row">
                                    <div className="col-12 mt-3 mb-3">
                                        <button className="btn btn-outline-dark" onClick={handleClickReturn}>
                                            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                                            <span className="m-3">Volver al menú</span>
                                        </button>
                                    </div>
                                </div>
                                {cart.map(({ id, sectionName, cantidad, price }) => (
                                    <li key={id} className="li-cartItems">
                                        <div className="card-header">
                                            <h4 className="h4">{sectionName}</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="row">
                                                        <strong>ID Producto: </strong>
                                                    </div>
                                                    <div className="row">
                                                        <strong>Cantidad: </strong>
                                                    </div>
                                                    <div className="row">
                                                        <strong>Precio: </strong>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="row">
                                                        <span className="span-xs-info">{id}</span>
                                                    </div>
                                                    <div className="row">
                                                        <span className="span-xs-info">{cantidad} </span>
                                                    </div>
                                                    <div className="row">
                                                        <span className="span-xs-info">{(convertPrice(price) * cantidad).toFixed(2)}$</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <button className="btn btn-dark" onClick={() => removeItem(id)}>Remover producto</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="btn btn-danger" onClick={() => removeAll(id)}>Remover todo</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </li>
                                ))}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <strong className="tag-total-price"> TOTAL:</strong>
                                        </div>
                                        <div className="col-6">
                                            <p className="total-price">{totalPrice}$</p>
                                        </div>
                                    </div>
                                </div>
                            </ul>}
                    </article>
                    {/* Al haber una orden, se puede navegar hacia la zona de pago */}
                    {cart.length > 0
                        ?
                        <article className="container">
                            <div className="row m-3">
                                <div className="col-12 d-flex justify-content-center">
                                    <button className="btn btn-outline-success btn-lg" onClick={handlePayment}>
                                        <FontAwesomeIcon icon={faCreditCard} size="lg" />
                                        <p>Ir a la zona de pago</p>
                                    </button>
                                </div>
                            </div>
                        </article>
                        : 
                        <div className="just-zero-div"></div>}
                </section>
            </main>
            <FooterN />
        </>
    );
}