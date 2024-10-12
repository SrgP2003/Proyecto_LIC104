import "../assets/css/MenuItem.css"
import "../assets/css/MenuSection.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { OverlayTrigger, Popover } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

//Componente para representar cada item de las secciones del menu
export function MenuItem({ id, urlImg, altImg, sectionName, aboutDish, price, addToCart }) {
    const [cantidad, setCantidad] = useState(0);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);

    const increment = () => {
        (cantidad > 9) ? setCantidad(cantidad) : setCantidad(cantidad + 1) //Funcion para incrementar platillo
    }
    const decrement = () => {
        (cantidad < 1) ? setCantidad(cantidad * 0) : setCantidad(cantidad - 1) //Funcion para decrementar platillo
    }

    const handleAddToCart = (e) => { //Logica: si el usuario elige un item, se añade un objeto para el carrito
        if (cantidad > 0) {
            const item = {
                id,
                sectionName,
                price,
                cantidad
            }
            addToCart(item);
            setCantidad(0);
            setShow(!show);
            setTarget(e.target);
        }
    }
    const clickAfuera = () => { //Logica para el mensaje de confirmacion al agregar un item al carrito
        setShow(false);
    }
    //Funcion para dar a conocer confirmacion de item agregado al carrito
    const popoverShow = ( 
        <Popover id="popover-succed">
            <Popover.Body className="text-center">
                Los productos se han agregado correctamente al carrito.
            </Popover.Body>
        </Popover>
    );

    return (
        <section className="card mt-3 mb-3 card-md-section">
            <div className="card-body">
                <div className="row row-info d-flex justify-content-center">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <img className="img-dish img-fluid" src={urlImg} alt={altImg} />
                    </div>
                    <div className="col-sm-12 col-sm-7 col-lg-7 col-section">
                        <p className="p-dish-section">{sectionName}</p>
                        <p className="p-dish-description">{aboutDish}</p>
                    </div>
                </div>
                <hr />
                <div className="row row-options text-center">
                    <div className="col-12 col-cart">
                        <div className="row row-cartButton">
                            <div className="col-12">
                                <OverlayTrigger trigger={'click'} placement={'bottom'} overlay={popoverShow} show={show} rootClose onToggle={clickAfuera}>
                                    <button className="btn btn-dark" onClick={handleAddToCart}>Añadir al carrito</button>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <div className="row row-num-item pt-3">
                            <div className="col-4 text-end">
                                <button className="btn btn-outline-dark btn-sm" onClick={decrement}>
                                    <FontAwesomeIcon icon={faMinus} size="sm" />
                                </button>
                            </div>
                            <div className="col-4">
                                <p className="num-md-item">{cantidad}</p>
                            </div>
                            <div className="col-4 text-start">
                                <button className="btn btn-outline-dark btn-sm" onClick={increment}>
                                    <FontAwesomeIcon icon={faPlus} size="sm" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-price">
                        <p className="card-dish-price">{price}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
//Componente para representar cada seccion del menu
export function MenuSection({ titleSection, children, description }) {
    return (
        <>
            <article>
                <header className="head-lg-section text-center">
                    <h1 className="h1">{titleSection}</h1>
                    <h5>{description}</h5>
                </header>
                <section className="section-lg-items">
                    {children}
                </section>
            </article>
        </>
    )
}