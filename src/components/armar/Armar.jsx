import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import Ingredientes from "../ingredientes/Ingredientes";
import Summary from "../summary/Summary";

const Armar = () => {
    const {data: ingredientes, loading} = useFetch('https://apipdtc.herokuapp.com/bulldog/ingredientes');
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) ?? []);
    const MAXIMO_ORDEN = 3

    useEffect(()=> {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order])

    //Agregar a la orden
    const handleAdd = (ingrediente) => {
        if(order.length === MAXIMO_ORDEN) {
            return toast.error("No puedes agregar mas ingredientes", {
                theme: "dark",
                position: toast.POSITION.TOP_CENTER
            });
        } 
        setOrder([...order, ingrediente]);
    }

    //Eliminar de la orden
    const handleDelete = (id) => setOrder( order.filter( ord => ord.id !== id ));

    if(loading) return null;

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
                    <Summary order = {order} handleDelete = {handleDelete} />
                </div>
            </div>
        </section>
    )
}

export default Armar
