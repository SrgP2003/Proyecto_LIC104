import "../assets/css/MenuItem.css"
import "../assets/css/MenuSection.css"

export function MenuItem({ urlImg, altImg, sectionName }) {
    return (
        <article className="card mt-3 mb-3 card-md-section">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-5 col-lg-5">
                        <img className="img-dish img-fluid" src={urlImg} alt={altImg} />
                    </div>
                    <div className="col-sm-7 col-lg-7">
                        <p className="card-dish-text">{sectionName}</p>
                    </div>
                </div>
                <hr />
                <div className="row row-info">
                    <p className="card-dish-text">{sectionName}</p>
                </div>
            </div>
        </article>
    )
}

export function MenuSection({ titleSection, description, children }) {
    return (
        <>
            <article>
                <header className="head-lg-section">
                    <h1 className="h1">{titleSection}</h1>
                    <p>{description}</p>
                </header>
                <section className="section-lg-items">
                    {children}
                </section>
            </article>
        </>
    )
}