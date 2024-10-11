import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import PaymentMethods from "./components/Payment";
import Cart from "./components/Cart"
import { useState, useEffect } from "react";
import { PaymentConfirmation, PaymentConfirmation2 } from "./components/PaymentConfirm";

export default function App() {
    //Estado del carrito
    const [cart, setCart] = useState([])

    //useEffect para mantener informacion del carrito en el navegador y no perderse en caso de refrescar la pagina
    useEffect(() => {
        //Cargando items
        const almacenarItems = sessionStorage.getItem('cart');
        if (almacenarItems)
            setCart(JSON.parse(almacenarItems));
    }, []);
    //Guardar informacion del carrito en el navegador
    useEffect(() => {
        //Guardando items
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //Funcion para agregar o actualizar un platillo en el carrito
    const agregarCart = (item) => {
        setCart((prevCart) => {
            //Verificando si un platillo ya se encuentra
            const firstItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (firstItem) {
                return prevCart.map(cartItem =>
                    (cartItem.id === item.id)
                        ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
                        : cartItem
                );
            }
            return [...prevCart, item];
        })
    }

    //Funcion para remover un solo item del carrito
    const handleRemoveItem = (itemId) => {
        setCart((prevItems) => {
            return prevItems.map(cartItem => {
                // Si el ID coincide, reduce la cantidad
                if (cartItem.id === itemId) {
                    const nuevaCantidad = cartItem.cantidad - 1;
                    if (nuevaCantidad > 0)
                        return { ...cartItem, cantidad: nuevaCantidad };
                    return null;
                }
                return cartItem; // Devolver el ítem si no coincide
            }).filter(cartItem => cartItem !== null);
        });
    };

    //Funcion para remover todos los items del carrito
    const handleRemoveAll = (itemId) => {
        setCart((prevItems) => {
            if (prevItems.length)
                return prevItems.filter(item => item.id !== itemId)
        })
    }
    const convertPrice = (priceC) => { return +priceC.split('').slice(0, -1).join('') } //Precio de los items
    const totalPrice = cart.reduce((acum, item) => acum + convertPrice(item.price) * item.cantidad, 0); //Precio total de todos los items
    return (
        <>
            <Router>  {/*Seccion correspondiente para poder navegar a diferentes paginas o componentes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<Menu addToCart={agregarCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart cart={cart} removeItem={handleRemoveItem} removeAll={handleRemoveAll} totalPrice={totalPrice} convertPrice={convertPrice} />} />
                    <Route path="/payment" element={<PaymentMethods cart={cart} totalPrice={totalPrice} removeItems = {handleRemoveAll}/>} />
                    <Route path="/payment-confirmation" element={<PaymentConfirmation/>} />
                    <Route path="/payment-confirmation-online" element={<PaymentConfirmation2/>} />
                </Routes>
            </Router>
        </>
    )
}