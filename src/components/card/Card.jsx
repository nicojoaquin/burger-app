const Card = ({nombre, ingredientes, precio, imagen, imgTerm}) => {
    return (
        <div className="col-lg-3 col-md-4">
            <article className="card shadow-lg mt-3">
                <img src={require(`../../assets/img/${imgTerm}/${imagen}.png`)} alt={nombre} />
                <div className="card-body">
                    <h5>{nombre}</h5>
                <ul className="list-group list-group-flush">
                    {
                        ingredientes?.map( (ingrediente, idx) => (
                            <li style={{listStyleType: "none"}} key={idx}>- {ingrediente}</li>
                        ))
                    }
                </ul>
                <div className="mt-3 d-flex justify-content-between align-items-center">
                    <p>${precio}</p>
                    <button className="btn btn-primary">Ordenar</button>
                </div>
                </div>
            </article>
        </div>
    )
}

export default Card;
