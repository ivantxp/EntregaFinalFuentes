import { useContext } from "react";
import { ContextoCarrito } from "../Context/ContextoCarrito";
import "./CardItem.css";
import BotonesRestarSumar from "../BotonesRestarSumar/BotonesRestarSumar";
const CardItem = ({ Nombre, Precio, id, cantidad, Fabricante, Stock, Img }) => {
    const { quitar, sumarEnCarrito, restarEnCarrito } =
        useContext(ContextoCarrito);

    function sumar() {
        sumarEnCarrito(id, Stock);
    }

    function restar() {
        restarEnCarrito(id);
    }

    function clikQuitar() {
        quitar(id);
    }

    return (
        <div className="contenedor_item_carrito">
            <img
                className="img_producto_carrito"
                src={Img}
                alt="imagen producto"
            />

            <div className="sub_detalles">
                <div>
                    <p className="nombre_sub_detalles fuente_textos">
                        {Nombre} {Fabricante}
                    </p>
                    <p className="precio_preventa tipografia_Titulo">
                        € {cantidad * Precio}
                    </p>
                </div>

                <div className="detalles_inferio">
                    <BotonesRestarSumar
                        accionRestar={restar}
                        accionSumar={sumar}
                        cantidad={cantidad}
                    />

                    <button onClick={clikQuitar} className="icono_eliminar">
                        <img
                            className="icono_eliminar"
                            src="../../../otros_iconos/eliminar.png"
                            alt="icono eliminar producto"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CardItem;
