import "../assets/css/Header.css"
import logoAdare from "../assets/images/adareLogo.png"
import { useNavigate } from "react-router-dom"
import "../assets/css/HeaderNav.css"

export default function HeaderNav({ title }) {
    const navigateHeader = useNavigate();
    const handleClickInicio = () => { navigateHeader("/") }
    const handleClickAbout = () => { navigateHeader("/about") }
    const handleClickMenu = () => { navigateHeader("/menu") }

    return (
        <>
            <div className="container headerNav-container">
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container p-1">
                        <a className="navbar-brand h1" href="#">{title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" data-bs-scroll="true" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <img src={logoAdare} alt="logoAdare" />
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active nav-link-head" onClick={handleClickInicio}>Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active nav-link-head" onClick={handleClickAbout}>¿Quiénes Somos?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active nav-link-head" onClick={handleClickMenu}>Ver el menú</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}