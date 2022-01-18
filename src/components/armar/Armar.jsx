import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Ingredientes from "../ingredientes/Ingredientes";
import Summary from "../summary/Summary";

const Armar = () => {
    const {data: ingredientes, loading} = useFetch('https://apipdtc.herokuapp.com/bulldog/ingredientes');
    const [order, setOrder] = useState([]);

    const handleAdd = (ingrediente) => {
        if(order.length === 3) return;
        setOrder([...order, ingrediente]);
    }

    return (
        <section className="container-fluid p-5">
            <div className="text-center">
                <h2>Arma tu hamburguesa</h2>
                <h3>Elije hasta 3 ingredientes</h3>
            </div>
            <div className = "row">
                <ul className="list-group col-md-6">
                    {
                        ingredientes.map( ingrediente => (
                            <Ingredientes 
                            key = {ingrediente.id} 
                            ingrediente = {ingrediente} 
                            handleAdd = {handleAdd}
                            order = {order}
                            {...ingrediente} 
                            />    
                            ))
                        }
                </ul>
                <div className = "col-md-6">
                    <Summary order = {order} />
                </div>
            </div>
        </section>
    )
}

export default Armar
