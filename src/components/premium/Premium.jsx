import useFetch from "../../hooks/useFetch"
import Card from "../card"

const Premium = () => {
    const {data: premium, loading} = useFetch('https://apipdtc.herokuapp.com/bulldog/premium')

    return (
        <section className="container-fluid p-4 premium">
            <h2 className="text-center text-light">Linea premium</h2>
            <div className="row mt-3">
                {
                    premium.map( card => (
                        <Card key={card.id} {...card} imgTerm = "premium" />
                    ))
                }
            </div>
        </section>
    )
}

export default Premium;
