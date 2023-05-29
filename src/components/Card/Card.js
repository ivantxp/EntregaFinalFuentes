import { useContext } from "react";
import { ContextoCarrito } from "../../Context/ContextoCarrito";
import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import "./Card.css";

const Card = () => {
    const { carrito, limpiar, sumaCantidadTotal, totalGastado } =
        useContext(ContextoCarrito);
    function limpiarCarrito() {
        limpiar();
    }

    return (
        <div className="conedor_carrito">
            <p className="contenedor_navegacion fuente_textos">
                <Link className="navegacion" to={"/"}>
                    Produtos/
                </Link>
                <Link className="navegacion" to={`/card`}>
                    card
                </Link>
            </p>

            {sumaCantidadTotal() === 0 ? (
                <p className="tipografia_Titulo titulo_carrito">
                    Carrito vacio
                </p>
            ) : (
                <>
                    <h2 className="tipografia_Titulo titulo_carrito">
                        Mis Articulos
                    </h2>
                    <div className="contendor_productos">
                        {carrito.map((el) => {
                            return <CardItem key={el.id} {...el} />;
                        })}
                    </div>

                    <div className="contendor_no_productos">
                        <div className="contendor_no_productos">
                            <p className="tipografia_Titulo total_carrito">
                                Total:{totalGastado()}
                            </p>

                            <div>
                                <Boton
                                    texto={"CheckOut"}
                                    agregadoClasse={
                                        "boton_generico  boton_carrito_check fuente_textos"
                                    }
                                    linkId={"/CheckOut"}
                                    onClick={""}
                                />
                                <Boton
                                    texto={"limpiar"}
                                    agregadoClasse={
                                        "boton_generico boton_carrito_limpiar fuente_textos"
                                    }
                                    linkId={""}
                                    onClick={limpiarCarrito}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default Card;
