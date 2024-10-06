import HeaderNav from "./HeaderNav"

export default function PaymentMethods({ cart, convertPrice, totalPrice }) {
    return (
        <>
            <header>
                <HeaderNav title={'Zona de pago'}/>
            </header>
            <p>{totalPrice}</p>
        </>
    )
}