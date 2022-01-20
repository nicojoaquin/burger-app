import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";

const Summary = ({order, handleDelete}) => {

    const MAXIMO_ORDEN = 3
    const total = order.reduce((a, ord) => a + ord.precio, 0);

    //Mensaje de confirmacion
    const onOrder = () => {
        
        if(order.length < MAXIMO_ORDEN) {
          return "fols"
        } 

        else {
            toast.success("Orden realizada!", {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <>  <h4 className="text-center mt-5">Resumen</h4>
            <p className="text-center">{order.length}/3 
                <span className="total"> ${total}</span>
            </p>
            <div className="text-center">
                <ul>
                    {
                        order.map( ({id, nombre, imagen, precio}) => (    
                            <li key={id} className="text-light d-flex justify-content-evenly align-items-center bg-dark mt-3 shadow-lg rounded-3">
                                <img width={50} src={require(`../../assets/img/ingredientes/${imagen}.png`)} alt={nombre} />
                                <span>{nombre}</span>
                                <span>${precio}</span>
                                <i className="bi bi-file-x-fill delete-icon" onClick = {() => handleDelete(id)}></i>
                            </li>              
                        ))
                    }
                </ul> 
                {
                    order.length > 0 ?    
                        <button onClick = {onOrder} className="btn btn-primary mt-3">Ordenar</button>
                    :
                        <h5 className="text-secondary">Agrega tu orden</h5>
                }
            </div>
        </>
    )
}

export default Summary
