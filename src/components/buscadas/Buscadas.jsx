import useFetch from "../../hooks/useFetch"
import Card from "../card"

const Buscadas = () => {
    const {data: buscadas, loading} = useFetch('https://apipdtc.herokuapp.com/bulldog/buscadas')

    return (
        <section className="buscadas container-fluid p-4">
            <h2 className="text-center text-light">Las mas buscadas</h2>
            <div className="row">
                {
                    buscadas.map( buscada => (
                        <Card key={buscada.id} {...buscada} imgTerm = "buscadas" />
                    ))
                }
            </div>
        </section>
    )
}

export default Buscadas;
