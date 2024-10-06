import "../assets/css/Menu.css"
import { MenuItem } from "../components/MenuTools"
import { MenuSection } from "../components/MenuTools"
import FooterN from "../components/footer"
import HeaderNav from "../components/HeaderNav"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

/*Imagenes para cada seccion */
import Pasta from "../assets/images/Pasta.png"
import Risotto_nero from "../assets/images/Risotto_nero.jpg"
import caprese from "../assets/images/CAPRESE1.png"
import Ossobuco from "../assets/images/OSSOBUCO.jpg"
import Funghi from "../assets/images/FUNGHI.jpg"
import Tiramisu from "../assets/images/TIRAMISu.jpg"
import Gelato_monterosso from  "../assets/images/GELATO_MONTEROSSO.jpg"
import pizza_nutella from "../assets/images/pizza_nutella1.png"
import pannacotta from "../assets/images/PANNACOTTA.jpg"
import piemontesa  from "../assets/images/caprese2.jpg"
import profiterol from "../assets/images/PROFITEROL.jpg"
import cannolli from "../assets/images/CANNOLLI.png"
 

export function Menu() {
    const buttonCart = <button className="btn btn-dark">Añadir al carrito</button>
    return (
        <>
            <header>
                <HeaderNav title={'Menú'} />
            </header>
            <main>
                {/*Seccion de ensaladas */}
                <MenuSection titleSection={"Antipasti e insalati"} description={'Aperitivos y ensaladas'}>
                    <div id="carousel-items-dish-1" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide-to="4" aria-label="Slide 5"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Pan y tostadas*/}
                <MenuSection titleSection={"Pane E Crostini"} description={'Pan y tostadas'}>
                    <div id="carousel-items-dish-2" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-2" data-bs-slide-to="1" aria-label="Slide 2"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Zuppe*/}
                <MenuSection titleSection={"Zuppe"} description={'Sopas'}>
                    <div id="carousel-items-dish-3" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-3" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-3" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Pizzas*/}
                <MenuSection titleSection={"Pizzas"} description={'Pizzas tradicionales y extraordinarias'} >
                    <div id="carousel-items-dish-4" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide-to="5" aria-label="Slide 6"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-4" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Pastas*/}
                <MenuSection titleSection={"Pasta"} description={'Pastas y sphaguetti'}>
                    <div id="carousel-items-dish-5" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide-to="5" aria-label="Slide 6"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pasta}
                                                sectionName={'Pasta gratinada con vegetales'}
                                                altImg={'img-pasta'}
                                                aboutDish={'carne al pastor, tomates, cebollas y un cuarto de frutos secos'}
                                                price={'12.99$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-5" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Risotto*/}
                <MenuSection titleSection={"Risotto"} description={'Arroz italiano'}>
                    <div id="carousel-items-dish-6" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Funghi}
                                                sectionName={'FUNGHI'}
                                                altImg={'img-pasta'}
                                                aboutDish={'ARROZ ARBORIO CREMOSO CON HONGOS Y PARMESANO REGGIANO​'}
                                                price={'16$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={caprese}
                                                sectionName={'CAPRESE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'ARROZ ARBORIO CREMOSO CON TOMATES Y MOZZARELLA'}
                                                price={'15$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Ossobuco}
                                                sectionName={'OSSOBUCO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'ARROZ ARBORIO CREMOSO CON PARMESANO Y CORTE DE RES ESTOFADO EN SUS JUGOS'}
                                                price={'14$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Risotto_nero}
                                                sectionName={'RISOTTO NERO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'ARROZ ARBORIO CREMOSO CON CALAMARES FRITOS, ALIOLI DE LIMA Y TINTA DE CALAMAR'}
                                                price={'15$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-6" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-6" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </MenuSection>

                {/*Seccion de Dolci*/}
                <MenuSection titleSection={"Dolci"} description={'Postres'}>
                    <div id="carousel-items-dish-7" className="carousel carousel-dark slide">
                        <div className="carousel-indicators pt-3">
                            <button type="button" data-bs-target="#carousel-items-dish-7" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-7" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-7" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel-items-dish-7" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active carousel-item-1" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Tiramisu}
                                                sectionName={'TIRAMISÚ'}
                                                altImg={'img-pasta'}
                                                aboutDish={'DULCE DE SOLETILLAS “SAVOIARDI” CON CAFÉ, CACAO Y 100% MASCARPONE'}
                                                price={'6$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Gelato_monterosso}
                                                sectionName={'GELATO MONTEROSSO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'HELADO HECHO EN CASA DE NOCCIOLA Y NUTELLA'}
                                                price={'8$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-2" data-bs-interval="2000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={pizza_nutella}
                                                sectionName={'PIZZA DE NUTELLA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'MASA DE CACAO CON MARSHMALLOW, RICOTTA DULCE Y TIERRA DE OREO'}
                                                price={'7$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={pannacotta}
                                                sectionName={'PANNACOTTA DE FRUTOS ROJOS'}
                                                altImg={'img-pasta'}
                                                aboutDish={'FLAN ITALIANO DE CREMA DE LECHE CON FRUTOS ROJOS​'}
                                                price={'6$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={piemontesa}
                                                sectionName={'TORTA PIEMONTESA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'TORTA DE CHOCOLATE, AVELLANAS, GANACHE DE GIANDUIA​'}
                                                price={'9$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={profiterol}
                                                sectionName={'PROFITEROL PISTACCHIO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'GELATO DE PISTACCHIO, CRUMBLE DE PISTACCHIO, SALSA TIBIA DE CHOCOLATE BLANCO Y PISTACCHIO'}
                                                price={'11$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={cannolli}
                                                sectionName={'CANNOLLI NUTELLA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'CONO CROCANTE RELLENO DE NUTELLA Y CREMA PASTELERA​'}
                                                price={'5$'}
                                                cart={buttonCart}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items-dish-7" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-items-dish-7" data-bs-slide="next">
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