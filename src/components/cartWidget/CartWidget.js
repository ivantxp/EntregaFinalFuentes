import { useContext } from "react";
import carrito from "../../components/img/iconos/carrito.png";
import "./CartWidget.css";
import { ContextoCarrito } from "../Context/ContextoCarrito";
import { Link } from "react-router-dom";

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
