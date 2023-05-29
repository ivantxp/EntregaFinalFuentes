import { useContext } from "react";
import "./CartWidget.css";
import { ContextoCarrito } from "../../Context/ContextoCarrito";
import { Link } from "react-router-dom";
import carrito from "../../Img/iconos/carrito.png";

const CartWidget = () => {
    const { sumaCantidadTotal } = useContext(ContextoCarrito);
    return (
        <div className="contenedor_cardWidget tipografia_Titulo">
            <Link to="/card">
                <img src={carrito} className="img_carrito" alt="carrito" />
            </Link>
            <p className="carrito_cantidad">
                {sumaCantidadTotal() !== 0 ? sumaCantidadTotal() : " "}
            </p>
        </div>
    );
};
export default CartWidget;
