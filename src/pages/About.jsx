import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import HeaderNav from "../components/HeaderNav"
import banner from "../assets/images/banner.png"
import banner1 from "../assets/images/banner1.png"
import "../assets/css/About.css"
import FooterN from "../components/footer"

export function About() {
    return (
        <>
            <header>
                <HeaderNav title={"Acerca de Adaré"} />
            </header>
            <main className="m-3">
                <section className="container-fluid">
                    <article className="article-about">
                        <div className="row m-3">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <img className="img-xl-banner img-fluid" src={banner} alt="banner-italian-Food" />
                            </div>
                            <div className="col-about col-sm-12 col-md-12 col-lg-6">
                                <p><h1 className="display-5">¿Quiénes somos?</h1>
                                    Ubicado en el vibrante centro de San Salvador, Adaré es un restaurante que ha deleitado a los
                                    paladares locales por más de 15 años. Desde su apertura en 2009, Adare se ha ganado una sólida
                                    reputación como el rincón más auténtico de la gastronomía italiana en El Salvador. Fundado
                                    por la familia Rossi, inmigrantes italianos que trajeron consigo recetas que han pasado de
                                    generación en generación, Adare combina la tradición culinaria italiana con la calidez y
                                    hospitalidad salvadoreña.</p>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-about col-sm-12 col-md-12 col-lg-12">
                                <p>En Adaré, cada plato cuenta una historia. Desde la clásica pasta hecha a mano, como la Focaccia de
                                    aceitunas y tomates, hasta el crujiente y fragante pan horneado al estilo de la Toscana, la autenticidad
                                    es nuestro principal ingrediente. El restaurante ha mantenido su compromiso de utilizar ingredientes
                                    frescos y de la más alta calidad, seleccionados cuidadosamente tanto de productores locales como de
                                    importaciones directas desde Italia.</p>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <img className="img-xl-banner img-fluid" src={banner1} alt="banner-italian-Food" />
                            </div>
                            <div className="col-about col-sm-12 col-md-12 col-lg-6">
                                <p>Si buscas un lugar donde el sabor te transporte directamente a las colinas de la Toscana o a las costas
                                    de Amalfi, Adaré es el lugar perfecto. Ya sea que desees una comida familiar en un ambiente acogedor, o una celebración especial, cada visita a Adare promete ser
                                    una experiencia memorable. Te invitamos a descubrir el auténtico sabor de Italia sin salir de El Salvador,
                                    donde la tradición, la pasión y la buena mesa se encuentran en cada rincón de nuestro restaurante.
                                    ¡Ven a disfrutar de una experiencia culinaria que te hará volver una y otra vez!</p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <FooterN />
        </>
    )
}