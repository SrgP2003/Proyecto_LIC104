import "../assets/css/Menu.css"
import { MenuItem } from "../components/MenuTools"
import { MenuSection } from "../components/MenuTools"
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
                    <HeaderNav title={'Menú'} />
                </header>

                {/*Seccion de ensaladas */}
                <MenuSection titleSection={"Antipasti e insalati"} description={"Todas las ensaladas creadas al estilo de Italia y sus alrededores"}>
                    <div id="carousel-items-dish" className="carousel carousel-dark slide">
                        <div class="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem urlImg={Pasta} sectionName={'Pasta'} />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem urlImg={Pasta} sectionName={'Pasta'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active carousel-item-2" data-bs-interval="2000" >
                                <div className="container">

                                </div>
                            </div>
                            <div className="carousel-item active carousel-item-3">
                                <div className="container">

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Pan */}
                <MenuSection titleSection={"Pane E Crostini"} description={"Pancito italiano mi rei"}>
                    <div id="carousel-items-dish" className="carousel carousel-dark slide">
                        <div class="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem urlImg={Pasta} sectionName={'Pasta'} />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem urlImg={Pasta} sectionName={'Pasta'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active carousel-item-2" data-bs-interval="2000" >
                                <div className="container">

                                </div>
                            </div>
                            <div className="carousel-item active carousel-item-3">
                                <div className="container">

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>
            </main>
            <FooterN />
        </>

    )
}