import NavBar from "../components/navbar";
import "../assets/css/Home.css"
import "../assets/images/adareLogo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import logoAdare from "../assets/images/adareLogo.png"

export function HomePage() {
    return (
        <>
            <header>
                <img className="img-fluid mb-3" src={logoAdare} alt="Adare-Logo" />
            </header>
            <NavBar /> {/* Componente NavBar */}
            <main>
                <h2 className="h2-md-title p-1 h2">¡Un ristorante da gustare e condividere!</h2>
                <section>
                    <article className="art-md-pr container mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis harum mollitia eveniet culpa veritatis hic tenetur neque iure, saepe ab earum sit beatae quisquam numquam placeat eius dolorum. Voluptatibus?</p>
                        <div className="div-md-btn">
                            <button className="btn btn-menu btn-primary btn-lg">Ver el menú</button>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}