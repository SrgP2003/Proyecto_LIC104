import NavBar from "../components/navbar";
import "../assets/css/Home.css"
import logoAdare from "../assets/images/adareLogo.png"
import { useNavigate } from "react-router-dom";
import FooterN from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


export function HomePage() {

    const navigate = useNavigate(); {/*Uso de hook navegar hacia el menu*/ }
    const handleClick = () => { navigate('/menu'); {/*Funcion asignada al boton para navegar hacia el menu*/ } }

    return (
        <>
            <div className="container-fluid p-3 container-xl-main">
                <header>
                    <img className="img-fluid mb-3 img-logo" src={logoAdare} alt="Adare-Logo" />
                </header>
                <NavBar colorEl={'#fff'} /> {/* Componente NavBar */}
                <main>
                    <h2 className="h2-md-title p-1 h2">¡Un ristorante da gustare e condividere!</h2>
                    <section className="section-lg-home">
                        <article className="art-md-pr container mt-3">
                            <p>Toda la esencia italiana para disfrutar y compartir con
                                aquellos que amas. En Adare Restaurant, podrás degustar
                                de platillos diseñados y perfeccionados por manos 100%
                                italianas</p>
                            <div className="div-md-btn">
                                <button onClick={handleClick} className="btn btn-menu btn-light btn-lg">Ver el menú</button>
                            </div>
                        </article>
                    </section>
                </main>
            </div>
            <FooterN />
        </>
    )
}