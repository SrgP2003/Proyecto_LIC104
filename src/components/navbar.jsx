import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/navbar.css"
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigateNv = useNavigate(); /*Uso del hook de para navegar entre componentes padres*/ 
    const handleClickInicio = () => navigateNv('/'); /* Funcion para navegar a inicio */
    const handleClickAbout = () => navigateNv('/about'); /* Funcion para navegar a ¿Quiénes Somos? */
    const handleClickContact = () => navigateNv('/contact'); /* Funcion para navegar a Contacto */
    
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="nv-lg-items collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a onClick={handleClickInicio} className="nav-link active">Inicio</a>
                        </li>
                        <li className="nav-item ">
                            <a onClick={handleClickAbout} className="nav-link active">¿Quiénes somos?</a>
                        </li>
                        <li className="nav-item ">
                            <a onClick={handleClickContact} className="nav-link active">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}