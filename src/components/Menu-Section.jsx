import "../assets/css/Menu-section.css"

export function MenuSection({urlImg, sectionName, altImg}) {
    return (
        <div className="container-fluid">
            <section className="card mt-3 mb-3 card-md-section">
                <article className="card-body">
                    <img clasName="img-fluid" src={urlImg} alt={altImg} />
                    <hr />
                    <div className="row text-center">
                        <p className="card-dish-text">{sectionName}</p>
                    </div>
                </article>
            </section>
        </div>
    )
}