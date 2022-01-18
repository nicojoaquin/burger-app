
const Ingredientes = ({nombre, precio, imagen}) => {

    return (
            <li className="list-group-item list-group-item-action mt-3 d-flex justify-content-around align-items-center shadow-lg" aria-current="true" style={{cursor: "pointer"}}>
                <img src={require(`../../assets/img/ingredientes/${imagen}.png`)} alt={nombre} />
                <span>{nombre}</span>
                <span>${precio}</span>
            </li>
    );
};

export default Ingredientes;
