import "../assets/css/Header.css"
import logoAdare from "../assets/images/adareLogo.png"
import { useNavigate } from "react-router-dom"

export default function HeaderNav({title}) {
    const navigateHeader = useNavigate();
    const handleClickInicio = () => {navigateHeader("/")}
    const handleClickAbout = () => {navigateHeader("/about")}
    const handleClickContact = () => {navigateHeader("/contact")}
    return (
        <>
            <header className="container p-3">
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container p-3">
                        <h1 className="navbar-brand h1" href="#">{title}</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
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
                                        <a className="nav-link active nav-link-head" onClick={handleClickContact}>Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}