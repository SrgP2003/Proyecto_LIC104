import "../assets/css/Menu.css"
import { MenuSection } from "../components/Menu-Section"
import FooterN from "../components/footer"

export function Menu() {
    return (
        <>
            <section className="container-section container-fluid">
                <article className="row row-1">
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Insalate'}
                            altImg={'Pasta-img'}
                        />
                    </div>
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Pasta'}
                            altImg={'Pane E Crostini'}
                        />
                    </div>
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Zuppe'}
                            altImg={'Pasta-img'}
                        />
                    </div>
                </article>
                <article className="row row-2">
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Insalate'}
                            altImg={'Pasta-img'}
                        />
                    </div>
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Pasta'}
                            altImg={'Pane E Crostini'}
                        />
                    </div>
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Zuppe'}
                            altImg={'Pasta-img'}
                        />
                    </div>
                </article>
                <article className="row row-3">
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Insalate'}
                            altImg={'Pasta-img'}
                        />
                    </div>
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Pasta'}
                            altImg={'Pane E Crostini'}
                        />
                    </div>
                    <div className="col-4">
                        <MenuSection
                            urlImg={"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg"}
                            sectionName={'Zuppe'}
                            altImg={'Pasta-img'}
                        />
                    </div>
                </article>
            </section>
            <FooterN />
        </>

    )
}