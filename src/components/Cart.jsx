import HeaderNav from "./HeaderNav";
import "../assets/css/Cart.css"
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, removeItem, removeAll }) {
    const returnMenu = useNavigate();
    const handleClickReturn = () => { returnMenu('/menu') }
    return (
        <>
            <header>
                <HeaderNav title={'Carrito'} />
            </header>
            <main>
                <section className="container">
                    <article className="card m-3">
                        {cart.length === 0 ?
                            <>
                                <div className="card-header d-flex justify-content-center">
                                    <h4 className="h4">El carrito está actualmente vacío</h4>
                                </div>
                                <div className="cardBody">
                                    <div className="row">
                                        <div className="col-12 p-3 d-flex justify-content-center">
                                            <p>Todos los productos elegidos en el menú se mostrarán aquí</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1 d-flex justify-content-center">
                                    <button className="btn btn-info btn-lg w-50" onClick={handleClickReturn}>Seguir comprando</button>
                                </div>
                            </> :
                            <ul>
                                {cart.map(({ id, sectionName, cantidad, price }) => (
                                    <li key={id} className="li-cartItems">
                                        <div className="card-header">
                                            <h4 className="h4">{sectionName}</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="row">
                                                        <strong># Producto: </strong>
                                                    </div>
                                                    <div className="row">
                                                        <strong>Cantidad: </strong>
                                                    </div>
                                                    <div className="row">
                                                        <strong>Precio:</strong>
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
                                                        <span className="span-xs-info">{(+price.split('').slice(0, -1).join('') * cantidad).toFixed(2)}$</span>
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
                            </ul>}
                    </article>
                </section>
            </main>
        </>
    );
}