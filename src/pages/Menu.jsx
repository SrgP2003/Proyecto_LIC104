import "../assets/css/Menu.css"
import { MenuItem } from "../components/MenuTools"
import { MenuSection } from "../components/MenuTools"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import FooterN from "../components/footer"
import HeaderNav from "../components/HeaderNav"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


/*Imagenes para cada seccion */
import Pasta from "../assets/images/Pasta.png"
import margarita from "../assets/images/margarita.png"
import vegana from "../assets/images/vegana.png"
import pepperoni from "../assets/images/pepperoni.png"
import queso from "../assets/images/queso.png"
import burrata from "../assets/images/burrata.png"
import carnivor from "../assets/images/carnivor.png"
import porcheta from "../assets/images/porcheta.png"
import camarones from "../assets/images/camarones.png"
import italiosa from "../assets/images/italiosa.png"
import Imperiale from "../assets/images/Imperiale.png"
import carbonara from "../assets/images/carbonara.png"
import diavola from "../assets/images/diavola.png"
/*Imagenes para seccion Panes*/
import focaccia1 from "../assets/images/focaccia-1.png"
import focaccia2 from "../assets/images/focaccia-2.png"
import blanco from "../assets/images/blanco.png"
import ciupeta from "../assets/images/ciupeta.png"
/*Imagenes para seccion sopas*/
import Minestrone from "../assets/images/Minestrone.png"
import Raffaelo from "../assets/images/Raffaello.png"
import tomate from "../assets/images/tomate.png"
import toscana from "../assets/images/toscana.png"
import papa from "../assets/images/papa.png"

import Funghi from "../assets/images/Risotto/FUNGHI.jpg"
import Capresse from "../assets/images/Risotto/CAPRESE1.png"
import Ossobuco from "../assets/images/Risotto/OSSOBUCO.jpg"
import Risotto_Nero from "../assets/images/Risotto/Risotto_nero.jpg"

import CanolliN from "../assets/images/Dolci/CANNOLLI.png"
import Profiterol from "../assets/images/Dolci/PROFITEROL.JPG"
import Piemontesa from "../assets/images/Dolci/caprese2.jpg"
import Pannacota from "../assets/images/Dolci/PANNACOTTA.jpg"
import PizzaNut from "../assets/images/Dolci/pizza_nutella1.png"
import GelatoM from "../assets/images/Dolci/GELATO_MONTEROSSO.jpg"
import Tiramisu from "../assets/images/Dolci/TIRAMISu.jpg"
/*Imagenes para sección de pastas*/
import quesopimienta from "../assets/images/Pasta/BUCATINI CACIO E PEPE.png"
import camaronesajo from "../assets/images/Pasta/FETUCCINI AGLIO, OLIO E GAMBERETTI.png"
import pesto from "../assets/images/Pasta/GNOCCHI AL PESTO RÚSTICO.png"
import sorrentina from "../assets/images/Pasta/GNOCCHI ALLA SORRENTINA.png"
import lbolognesa from "../assets/images/Pasta/LASAGNA BOLOGNESA.png"
import porcini from "../assets/images/Pasta/GNOCCHI PORCINI.png"
import lpomodoro from "../assets/images/Pasta/LINGUINI AL FILETTO DI POMODORO.png"
import cozze from "../assets/images/Pasta/LINGUINI COZZE.png"
import lmare from "../assets/images/Pasta/LINGUINI FRUTTO DI MARE.png"
import bosco from "../assets/images/Pasta/MEZZALUNA BOSCO.png"
import pbolognesa from "../assets/images/Pasta/PACCHERI ALLA BOLOGNESA.png"
import diabola from "../assets/images/Pasta/PASTA ALLA SPICY VODKA.png"


/*Imagenes para sección de ensaladas*/
import caprese from "../assets/images/Insalata/Caprese.png"
import dedosqueso from "../assets/images/Insalata/MozzarelaCa.png"
import riso from "../assets/images/Insalata/Riso.png"
import cesar from "../assets/images/Insalata/cesar.png"
import carman from "../assets/images/Insalata/carman.png"
import carpul from "../assets/images/Insalata/carpul.png"
import cozzee from "../assets/images/Insalata/cazz.png"
import polen from "../assets/images/Insalata/polen.png"
import melan from "../assets/images/Insalata/mel.png"
import fmisto from "../assets/images/Insalata/mis.png"





export function Menu({ addToCart }) {
    const goToCart = useNavigate();
    const handleClickCart = () => { goToCart("/cart") }
    return (
        <>
        buttonCart
            <header>
                <HeaderNav title={'Menú'} />
            </header>
            <main className="main-xl-menu">
                <div className="container-fluid container-cart">
                    <div className="row">
                        <button className="btn btn-success btn-lg btn-cart d-flex justify-content-center align-items-center" onClick={handleClickCart}>
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                            <span className="m-1">Carrito</span>
                        </button>
                    </div>
                </div>
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
                                                urlImg={caprese}
                                                sectionName={'INSALATA CAPRESE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Ensalada a base de tomate y queso mozzarella fresco, con aceite de oliva.'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={1}

                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={dedosqueso}
                                                sectionName={'MOZZARELLA IN CARROZZA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Triangulos de mozzarella derretida empanizados acompañados de salsa roja.'}
                                                price={'8$'}
                                                addToCart={addToCart}
                                                id={2}
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
                                                urlImg={riso}
                                                sectionName={'RISO AL SALTO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Rissotto crocante acompañado de tocino y queso.'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={3}

                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={cesar}
                                                sectionName={'INSALATA CESARE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Ensalada con mezcla de lechugas y una delicioso y jugosa pechuga de pollo ademas su aderezo caracteristico.'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={4}
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
                                                urlImg={carman}
                                                sectionName={'CARPACCIO DI MANZO '}
                                                altImg={'img-pasta'}
                                                aboutDish={'Carpaccio de carne de res, aderezado con nuestra salsa especial.'}
                                                price={'10$'}
                                                addToCart={addToCart}
                                                id={5}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={carpul}
                                                sectionName={'CARPACCIO DI POLPO '}
                                                altImg={'img-pasta'}
                                                aboutDish={'Carpaccio hecho de pulpo fresco con toques dulces y acidos.'}
                                                price={'18$'}
                                                addToCart={addToCart}
                                                id={6}
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
                                                urlImg={cozzee}
                                                sectionName={'COZZE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Mejillones salteados'}
                                                price={'15$'}
                                                addToCart={addToCart}
                                                id={7}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={polen}
                                                sectionName={'POLENTA FRITTA CON AIOLI'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Nuestra deliciosa polenta crocante acompañada de queso parmesano.'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={8}
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
                                                urlImg={melan}
                                                sectionName={'MELANZANE ALLA PARMIGIANA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Laminas de berenjena con queso mozzarella, tomate napolitano y pecorino romano.'}
                                                price={'7$'}
                                                addToCart={addToCart}
                                                id={9}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={fmisto}
                                                sectionName={'FRITTO MISTO '}
                                                altImg={'img-pasta'}
                                                aboutDish={'Camarones, calamares y pulpo crocantes.'}
                                                price={'14$'}
                                                addToCart={addToCart}
                                                id={10}
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
                                                urlImg={focaccia1}
                                                sectionName={'Focaccia de aceitunas y tomates'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Focaccia de aceitunas negras, tomates cherry, romero y aceite de oliva'}
                                                price={'4.99$'}
                                                addToCart={addToCart}
                                                id={11}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={focaccia2}
                                                sectionName={'Focaccia de mozzarela y hierbas'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Focaccia de mozzarella gratinado, hierbas provenzales y aceite de oliva'}
                                                price={'5.99$'}
                                                addToCart={addToCart}
                                                id={12}
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
                                                urlImg={blanco}
                                                sectionName={'Pane Bianco'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pane bianco con toamtes, albahaca, ajo, especias y aceite de oliva'}
                                                price={'3.99$'}
                                                addToCart={addToCart}
                                                id={13}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={ciupeta}
                                                sectionName={'Orden de Ciupetas'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pan de trigo tipico de Ferrera'}
                                                price={'3.99$'}
                                                addToCart={addToCart}
                                                id={14}
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
                                                urlImg={Minestrone}
                                                sectionName={'Zuppe Minestrone'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Sopa de ganos rojos, maccaroni, tocineta y Parmesano Reggiano'}
                                                price={'5.99$'}
                                                addToCart={addToCart}
                                                id={15}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Raffaelo}
                                                sectionName={'Zuppe del Raffaelo'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pregunta por la opcion de sopa del dia'}
                                                price={'5.99$'}
                                                addToCart={addToCart}
                                                id={16}
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
                                                urlImg={tomate}
                                                sectionName={'Crema de Tomate'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Con nueces tostadas, hongos, tomates cherry roastizados'}
                                                price={'4.99$'}
                                                addToCart={addToCart}
                                                id={17}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={toscana}
                                                sectionName={'Zuppe Toscana'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Sopa de frijoles toscanos, con rodajas de limon, Pamesano Reggiano y pan'}
                                                price={'5.99$'}
                                                addToCart={addToCart}
                                                id={18}
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
                                                urlImg={papa}
                                                sectionName={'Crema de Papa'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Crema de papa con tocino y cebollines'}
                                                price={'5.99$'}
                                                addToCart={addToCart}
                                                id={19}
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
                                                urlImg={margarita}
                                                sectionName={'Pizza Margerita Napolitana'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, mozzarella, albahaca y aceite de oliva extra virgen.'}
                                                price={'9.00$'}
                                                addToCart={addToCart}
                                                id={20}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={vegana}
                                                sectionName={'Pizza Vegana'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, tomate cherry, ajos confitados, aceitunas, champiñones, vinagreta de la casa y arugula'}
                                                price={'9.00$'}
                                                addToCart={addToCart}
                                                id={21}
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
                                                urlImg={pepperoni}
                                                sectionName={'American Pepperoni'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, mozzarella, pepperoni americano'}
                                                price={'10.50$'}
                                                addToCart={addToCart}
                                                id={22}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={queso}
                                                sectionName={'Pizza Quattro Formaggi'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Mozzarella, Parmesano Reggiano, Mascarpone, gorgonzola'}
                                                price={'11.00$'}
                                                addToCart={addToCart}
                                                id={23}
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
                                                urlImg={burrata}
                                                sectionName={'Pizza Burrata'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, ajos confitados, arugula, prosiutto, parmesano y burrata'}
                                                price={'13.00$'}
                                                addToCart={addToCart}
                                                id={24}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={carnivor}
                                                sectionName={'Pizza Carnivor'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, mozzarella, salsiccia, pepperoni ameriano, tocineta, salami'}
                                                price={'13.00$'}
                                                addToCart={addToCart}
                                                id={25}
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
                                                urlImg={camarones}
                                                sectionName={'Pizza Camarones al Ajillo'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Mozzarella, camarones, mantequilla de ajo y hieras'}
                                                price={'13.00$'}
                                                addToCart={addToCart}
                                                id={26}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={porcheta}
                                                sectionName={'Pizza Porcheta'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Mozzarella, romero fresco, porchetta con hierbas, romero'}
                                                price={'13.00$'}
                                                addToCart={addToCart}
                                                id={27}
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
                                                urlImg={italiosa}
                                                sectionName={'Extraordinaria Italiosa'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Crema de hongos y fungi procini, mozzarella, crutones, Paremsano Reggiano, starciatella, aceite de trufas'}
                                                price={'15.00$'}
                                                addToCart={addToCart}
                                                id={28}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Imperiale}
                                                sectionName={'Extraoridnaria Imperiale'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, mozzarella, arugula, prosciutto crudo, straciatella, Parmesano Reggiano'}
                                                price={'15.00$'}
                                                addToCart={addToCart}
                                                id={29}
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
                                                urlImg={carbonara}
                                                sectionName={'Extraordinaria Caronara'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Crema de Parmesano Reggiano, mozzarella fresca, tocineta"guaciale style", huevo'}
                                                price={'13.00$'}
                                                addToCart={addToCart}
                                                id={30}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={diavola}
                                                sectionName={'Extraordinaria Diavola Di Mare'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Fritto misto di mariscos, tocino, salsiccia italiana, aceitunas kalamata, mascarpone, perejil'}
                                                price={'18.99$'}
                                                addToCart={addToCart}
                                                id={31}
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
                                                urlImg={quesopimienta}
                                                sectionName={'BUCATINI CACIO E PEPE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Basca bucatini con salsa de queso y pimienta.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={32}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={camaronesajo}
                                                sectionName={'FETUCCINI AGLIO, OLIO E GAMBERETTI'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Fetuccini al ajillo con camarones.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={33}
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
                                                urlImg={pesto}
                                                sectionName={'GNOCCHI AL PESTO RÚSTICO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta a base de papa acompañada de una exquisita salsa pesto.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={34}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={sorrentina}
                                                sectionName={'GNOCCHI ALLA SORRENTINA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Deliciosa pasta a base de papa con salsa roja al horno.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={35}
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
                                                urlImg={lbolognesa}
                                                sectionName={'LASAGNA BOLOGNESA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Lasagna en salsa roja con carne molida.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={36}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={porcini}
                                                sectionName={'GNOCCHI PORCINI'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Gnoquis a base de papa salteados y acompañados con deliciosos hongos porcini'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={37}
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
                                                urlImg={lpomodoro}
                                                sectionName={'LASAGNA POMODORO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Lasagna de salsa de tomates, una opcion vegetariana.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={38}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={cozze}
                                                sectionName={'LINGUINI COZZE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta Linguini salteada con deliciosos y frescos mejillones.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={39}
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
                                                urlImg={lmare}
                                                sectionName={'LINGUINI AL FRUTI DI MARE'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Deliciosa pasta linguini acompañada de nuestra salsa de mariscos salteados.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={40}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={bosco}
                                                sectionName={'MEZZALUNA BOSCO'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Deliciosa pasta corta con salsa roja de hongos frescos.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={41}
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
                                                urlImg={pbolognesa}
                                                sectionName={'PACCHERI ALLA BOLOGNESA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta corta acompañada de nuestra famosa salsa boloñesa.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={42}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={diabola}
                                                sectionName={'PASTA ALLA SPICY VODKA'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasa de su preferencia acompañada de nuestra salsa rosa a base de chiles.'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={43}
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
                                                sectionName={'Funghi'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Arroz arborio cremoso con hongos y parmesano Reggiano'}
                                                price={'16$'}
                                                addToCart={addToCart}
                                                id={44}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Capresse}
                                                sectionName={'Caprese'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Arroz arborio cremoso con tomates y mozzarella'}
                                                price={'15$'}
                                                addToCart={addToCart}
                                                id={45}
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
                                                sectionName={'Ossobuco'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Arroz arborio cremoso con parmesano y corte de red estofado en sus jugos'}
                                                price={'14$'}
                                                addToCart={addToCart}
                                                id={46}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Risotto_Nero}
                                                sectionName={'Rissoto Nero'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Arroz arborio cremoso calamares fritos, alioli de lima y tinta de calamar'}
                                                price={'12.99$'}
                                                addToCart={addToCart}
                                                id={47}
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
                                                urlImg={CanolliN}
                                                sectionName={'Cannolli Nutella'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Cono crocante relleno de nutella y crema pastelera'}
                                                price={'5$'}
                                                addToCart={addToCart}
                                                id={48}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Profiterol}
                                                sectionName={'Profiterol Pistacchio'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Gelato de pistacchio, crumble de pistacchio, salsa tibia de chocolate blanco y pistacchio'}
                                                price={'11$'}
                                                addToCart={addToCart}
                                                id={49}
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
                                                urlImg={Piemontesa}
                                                sectionName={'Torta Piemontesa'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Torta de chocolate, avellanas, ganache de gianduia'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={50}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Pannacota}
                                                sectionName={'Pannacota de frutos rojos'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Flan italiano de crema de leche con frutos rojos'}
                                                price={'6$'}
                                                addToCart={addToCart}
                                                id={51}
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
                                                urlImg={PizzaNut}
                                                sectionName={'Pizza de nutella'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Masa de cacao cons marshmallow, ricotta dulce y tierra de oreo'}
                                                price={'7$'}
                                                addToCart={addToCart}
                                                id={52}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={GelatoM}
                                                sectionName={'Gelato Monterosso'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Helado hecho en casa de nocciola y nutella, panna, galleta de barquilla hecha en casa'}
                                                price={'8$'}
                                                addToCart={addToCart}
                                                id={53}
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
                                                urlImg={Tiramisu}
                                                sectionName={'Tiramisú'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Tradicional dulce de soletillas con café, cacao y mascarpone'}
                                                price={'6$'}
                                                addToCart={addToCart}
                                                id={54}
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