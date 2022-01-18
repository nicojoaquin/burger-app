import useFetch from "../../hooks/useFetch";
import Ingredientes from "../ingredientes/Ingredientes";

const Armar = () => {
    const {data: ingredientes, loading} = useFetch('https://apipdtc.herokuapp.com/bulldog/ingredientes');



    return (
        <section className="container">
            <div className="text-center">
                <h1>Arma tu hamburguesa</h1>
                <h2>Elije hasta 3 ingredientes</h2>
            </div>
            <ul className="list-group">
                {
                    ingredientes.map( ingrediente => (
                        <Ingredientes 
                            key = {ingrediente.id} 
                            ingrediente={ingrediente} 
                            {...ingrediente} 
                        />    
                    ))
                }
            </ul>
        </section>
    )
}

export default Armar
