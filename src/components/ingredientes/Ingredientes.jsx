import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ingredientes = ({ingrediente, id, nombre, precio, imagen, handleAdd, order}) => {

    const exist = order?.find( ord => ord.id === id);

    const onAdd = () => {
        if(exist) return toast.error("Ya agregaste este ingrediente", {
            theme: "dark",
            position: toast.POSITION.TOP_CENTER
        }) ;
        handleAdd(ingrediente);
    };


    return (
        <>
            <li 
            className={`list-group-item list-group-item-action mt-3 rounded-3 d-flex justify-content-around align-items-center shadow-lg ${!!exist ? "bg-dark text-light" : "bg-light"}`}
            aria-current="true" 
            style={{cursor: "pointer"}}
            onClick = {onAdd}
            >
                <img width={100} src={require(`../../assets/img/ingredientes/${imagen}.png`)} alt={nombre} />
                <span>{nombre}</span>
                <span>${precio}</span>
            </li>
            <ToastContainer />
        </>
    );
};

export default Ingredientes;
