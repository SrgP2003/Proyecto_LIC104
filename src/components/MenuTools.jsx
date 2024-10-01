import "../assets/css/MenuItem.css"
import "../assets/css/MenuSection.css"

export function MenuItem({ urlImg, altImg, sectionName, aboutDish, price, cart }) {
    return (
        <article className="card mt-3 mb-3 card-md-section">
            <div className="card-body">
                <div className="row row-info d-flex justify-content-center">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <img className="img-dish img-fluid" src={urlImg} alt={altImg} />
                    </div>
                    <div className="col-sm-12 col-sm-7 col-lg-7 col-section">
                        <p className="p-dish-section">{sectionName}</p>
                        <p className="p-dish-description">{aboutDish}</p>
                    </div>
                </div>
                <hr />
                <div className="row row-options text-center">
                    <div className="col-12 col-cart">
                        {cart}
                    </div>
                    <div className="col-12 col-price">
                        <p className="card-dish-price">{price}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export function MenuSection({ titleSection, children, description }) {
    return (
        <>
            <article>
                <header className="head-lg-section">
                    <h1 className="h1">{titleSection}</h1>
                    <h5>{description}</h5>
                </header>
                <section className="section-lg-items">
                    {children}
                </section>
            </article>
        </>
    )
}