import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/navbar.css"

export default function NavBar() {
    const elementsNav = ['Inicio', '¿Quiénes somos?', 'Contacto']; /* Array de elementos para el nav */
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="nv-lg-items collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        {elementsNav.map(el => (
                            <li className="nav-item">
                                <a href="#" className="nav-link active">{el}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}