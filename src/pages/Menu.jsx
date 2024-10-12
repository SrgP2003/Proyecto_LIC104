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
/*Imagenes para seccion pizzas */
import margarita from "../assets/images/Pizzas/margarita.png"
import vegana from "../assets/images/Pizzas/vegana.png"
import pepperoni from "../assets/images/Pizzas/pepperoni.png"
import queso from "../assets/images/Pizzas/queso.png"
import burrata from "../assets/images/Pizzas/burrata.png"
import carnivor from "../assets/images/Pizzas/carnivor.png"
import porcheta from "../assets/images/Pizzas/porcheta.png"
import camarones from "../assets/images/Pizzas/camarones.png"
import italiosa from "../assets/images/Pizzas/italiosa.png"
import Imperiale from "../assets/images/Pizzas/Imperiale.png"
import carbonara from "../assets/images/Pizzas/carbonara.png"
import diavola from "../assets/images/Pizzas/diavola.png"
/*Imagenes para seccion Panes*/
import focaccia1 from "../assets/images/Pane/focaccia-1.png"
import focaccia2 from "../assets/images/Pane/focaccia-2.png"
import blanco from "../assets/images/Pane/blanco.png"
import ciupeta from "../assets/images/Pane/ciupeta.png"
/*Imagenes para seccion sopas*/
import Minestrone from "../assets/images/Zuppe/Minestrone.png"
import Raffaelo from "../assets/images/Zuppe/Raffaello.png"
import tomate from "../assets/images/Zuppe/tomate.png"
import toscana from "../assets/images/Zuppe/toscana.png"
import papa from "../assets/images/Zuppe/papa.png"
/* Imagenes para seccion Risotto */
import Funghi from "../assets/images/Risotto/FUNGHI.jpg"
import Capresse from "../assets/images/Risotto/CAPRESE1.png"
import Ossobuco from "../assets/images/Risotto/OSSOBUCO.jpg"
import Risotto_Nero from "../assets/images/Risotto/Risotto_nero.jpg"
/* Imagenes para seccion Dolci */
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
                                                sectionName={'Insalata Caprese'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Ensalada a base de tomate y queso mozzarella fresco, con aceite de oliva'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={1}

                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={dedosqueso}
                                                sectionName={'Mozzarella in Carrozza'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Triángulos de mozzarella derretida empanizados acompañados de salsa roja'}
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
                                                sectionName={'Riso al Salto'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Rissotto crocante acompañado de tocino y queso'}
                                                price={'9$'}
                                                addToCart={addToCart}
                                                id={3}

                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={cesar}
                                                sectionName={'Insalata Cesare'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Ensalada con mezcla de lechugas y jugosa pechuga de pollo bañado en su aderezo característico'}
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
                                                sectionName={'Carpaccio di Manzo '}
                                                altImg={'img-pasta'}
                                                aboutDish={'Lonjas de res con hongos frescos, parmesano reggiano y aderezo de albahaca'}
                                                price={'10$'}
                                                addToCart={addToCart}
                                                id={5}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={carpul}
                                                sectionName={'Carpaccio di Polpo '}
                                                altImg={'img-pasta'}
                                                aboutDish={'Lonjas de pulpo con aderezo cítrico, tejas de pan y limón'}
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
                                                sectionName={'Cozze'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Mejillones en mantequilla de vino blanco, ajo y perejil'}
                                                price={'15$'}
                                                addToCart={addToCart}
                                                id={7}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={polen}
                                                sectionName={'Polenta Fritta con Aioli'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Palitos de polenta crocante con cremoso de parmesano reggiano trufado'}
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
                                                sectionName={'Melanzane Alla Parmigiana'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Laminas de berenjena con queso mozzarella, tomate napolitano y pecorino romano'}
                                                price={'7$'}
                                                addToCart={addToCart}
                                                id={9}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={fmisto}
                                                sectionName={'Fritto Misto'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Camarones, calamares y pulpo crocantes en salsa tártara'}
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
                                                price={'5$'}
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
                                                price={'6$'}
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
                                                aboutDish={'Pane bianco con tomates, albahaca, ajo, especias y aceite de oliva'}
                                                price={'4$'}
                                                addToCart={addToCart}
                                                id={13}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={ciupeta}
                                                sectionName={'Orden de Ciupetas'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pan de trigo típico de Ferrera'}
                                                price={'4$'}
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
                                                sectionName={'Minestrone'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Sopa de granos rojos, maccaroni, tocineta y Parmesano Reggiano'}
                                                price={'6$'}
                                                addToCart={addToCart}
                                                id={15}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={Raffaelo}
                                                sectionName={'Zuppe del Raffaelo'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pregunta por la opción de sopa del dia'}
                                                price={'5$'}
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
                                                aboutDish={'Sopa con nueces tostadas, hongos y tomates cherry roastizados'}
                                                price={'6$'}
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
                                                price={'6$'}
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
                                                price={'7$'}
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
                                                sectionName={'Pizza Margarita Napolitana'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Salsa de tomate, mozzarella, albahaca y aceite de oliva extra virgen.'}
                                                price={'9$'}
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
                                                price={'9$'}
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
                                                price={'10$'}
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
                                                price={'11$'}
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
                                                price={'13$'}
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
                                                price={'13$'}
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
                                                price={'13$'}
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
                                                price={'13$'}
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
                                                aboutDish={'Crema de hongos y fungi procini, mozzarella, crutones, Parmesano Reggiano, starciatella, aceite de trufas'}
                                                price={'15$'}
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
                                                price={'15$'}
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
                                                price={'13$'}
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
                                                price={'19$'}
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
                                                sectionName={'Bucatini Cacio e Pepe'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Basca bucatini con salsa de queso y pimienta'}
                                                price={'15$'}
                                                addToCart={addToCart}
                                                id={32}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={camaronesajo}
                                                sectionName={'Fetuccini Aglio, Olio e Gamberetti'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta fetuccini al ajillo con aceite de oliva y camarones'}
                                                price={'16$'}
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
                                                sectionName={'Gnocchi al Pesto Rústico'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta a base de papa acompañada de una exquisita salsa pesto'}
                                                price={'11$'}
                                                addToCart={addToCart}
                                                id={34}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={sorrentina}
                                                sectionName={'Gnocchi Alla Sorrentina'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Deliciosa pasta a base de papa con salsa roja al horno'}
                                                price={'11$'}
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
                                                sectionName={'Lasagna Bolognesa'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Lasagna en salsa roja con carne molida, salsa de tomate napolitano y mozarella grtinada'}
                                                price={'11$'}
                                                addToCart={addToCart}
                                                id={36}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={porcini}
                                                sectionName={'Gnocchi Porcini'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Gnocchi a base de papa salteados y acompañados con hongos porcini y almendras tostadas'}
                                                price={'11$'}
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
                                                sectionName={'Lasagna Pomodoro'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Lasagna de salsa de tomates, una opción vegetariana'}
                                                price={'12$'}
                                                addToCart={addToCart}
                                                id={38}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={cozze}
                                                sectionName={'Linguini Cozze'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta Linguini salteada con deliciosos y frescos mejillones'}
                                                price={'15$'}
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
                                                sectionName={'Linguini al Frutto di Mare'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta linguini acompañada de salsa de mariscos salteados, camarones, calamares, almeja, alcaparra y aceitunas'}
                                                price={'14$'}
                                                addToCart={addToCart}
                                                id={40}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={bosco}
                                                sectionName={'Mezalluna Bosco'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta corta rellena de riccota cremosa y grana padano doc en crema rosada'}
                                                price={'13$'}
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
                                                sectionName={'Paccheri Alla Bolognesa'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta corta en formato extra grande, con salsa de tomate napolitano, carne y parmesano reggiano'}
                                                price={'13$'}
                                                addToCart={addToCart}
                                                id={42}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <MenuItem
                                                urlImg={diabola}
                                                sectionName={'Pasta Alla Spicy Vodka'}
                                                altImg={'img-pasta'}
                                                aboutDish={'Pasta corta, crema roja en vodka, pangratatto y pepperoncini'}
                                                price={'11$'}
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