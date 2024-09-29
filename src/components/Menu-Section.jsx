import "../assets/css/Menu-section.css"

export function MenuSection({ urlImg, sectionName, altImg }) {
    return (
        <div className="container">
            <section className="card mt-3 mb-3 card-md-section">
                <article className="card-body">
                    <div className="row">
                        <img className="img-dish img-fluid" src={urlImg} alt={altImg} />
                    </div>
                    <hr />
                    <div className="row row-info">
                        <p className="card-dish-text">{sectionName}</p>
                    </div>
                </article>
            </section>
        </div>
    )
}