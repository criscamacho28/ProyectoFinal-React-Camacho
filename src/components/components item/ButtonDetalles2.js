import { useContext } from "react";
import { listCartContext } from "./providerContextoListCart";

const ButtonDetalles2 = ( {id} ) => {
    
    let {addProduct } = useContext(listCartContext)

    const handlerClick = () => { 
        addProduct(Math.floor(Math.random() * 10))
    }
    
    return(
        <button id="detalles" onClick={handlerClick}>
            <p>Agregar al carritooo</p>
        </button>
    )
}

export default ButtonDetalles2;