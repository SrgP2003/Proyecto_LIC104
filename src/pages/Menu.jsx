import "../assets/css/Menu.css"
import { MenuSection } from "../components/Menu-Section"
import FooterN from "../components/footer"
import HeaderNav from "../components/HeaderNav"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

/*Imagenes para cada seccion */
import Insalati from "../assets/images/Ensalada.png"
import Pasta from "../assets/images/Pasta.png"
import Zuppe from "../assets/images/Zuppe.png"
import Pizza from "../assets/images/Pizza.png"
import Rissoto from "../assets/images/Rissoto.png"
import Spiatti from "../assets/images/Spiatti.png"
import Dolci from "../assets/images/Dolci.png"
import Crostini from "../assets/images/Crostini.png"

export function Menu() {
    return (
        <>
            <main>
                <header>
                    <HeaderNav title={'Menú'}/>
                </header>
                <section className="container-section container-fluid ">
                    <article className="row d-flex justify-content-center g-0">  {/* Fila #1*/}
                        <div className="col-md-6 col-lg-4">
                            <MenuSection
                                urlImg={Insalati}
                                sectionName={"Insalati"}
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <MenuSection
                                urlImg={Crostini}
                                sectionName={"Pane E Crostini"}
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <MenuSection
                                urlImg={Zuppe}
                                sectionName={"Zuppe"}
                            />
                        </div>
                    </article>


                    <article className="row d-flex justify-content-center g-0">  {/* Fila #2*/}
                        <div className="col-md-6 col-lg-4">
                            <MenuSection
                                urlImg={Pizza}
                                sectionName={"Pizzas"}
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <MenuSection
                                urlImg={Pasta}
                                sectionName={"Pasta"}
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <MenuSection
                                urlImg={Rissoto}
                                sectionName={"Rissoto"}
                            />
                        </div>
                    </article>


                    <article className="row d-flex justify-content-center g-0">  {/* Fila #3*/}
                        <div className="col-md-6 col-lg-5 col-lg-offset">
                            <MenuSection
                                urlImg={Spiatti}
                                sectionName={"Secondi Piatti"}
                            />
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <MenuSection
                                urlImg={Dolci}
                                sectionName={"Dolci"}
                            />
                        </div>
                    </article>
                </section>
            </main>
            <FooterN />
        </>

    )
}