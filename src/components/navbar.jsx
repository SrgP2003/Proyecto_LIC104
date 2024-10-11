import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/navbar.css"
import { useNavigate } from "react-router-dom";

export default function NavBar({colorEl}) {
    const navigateNv = useNavigate(); /*Uso del hook de para navegar entre componentes padres*/ 
    const handleClickAbout = () => navigateNv('/about'); /* Funcion para navegar a ¿Quiénes Somos? */
        
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="nv-lg-items collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a onClick={handleClickAbout} className="nav-link active" style={{color: colorEl}}>¿Quiénes somos?</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}