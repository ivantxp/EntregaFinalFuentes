import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Boton from "../Boton/Boton";
import BotonesRestarSumar from "../BotonesRestarSumar/BotonesRestarSumar";
import { Link } from "react-router-dom";

const ItemCount = ({
    cantidadPasada,
    stock,
    inicial,
    Nombre,
    cantidadParaPrecio,
}) => {
    const [cantidad, setCantidad] = useState(inicial);

    function agregar() {
        cantidad > 0 && cantidadPasada(cantidad);

        <Link to={"/card"} className="fuente_textos toast_esitlo">
            {toast(`Se agrego ${cantidad} ${Nombre}`)}
        </Link>;
    }

    function sumar() {
        cantidad < stock && setCantidad(cantidad + 1);
    }
    function restar() {
        cantidad > 0 && setCantidad(cantidad - 1);
    }
    cantidadParaPrecio(cantidad);
    return (
        <div className="contenedor_botones_card ">
            <Boton
                texto={"Agregar"}
                agregadoClasse={"boton_agregar fuente_textos"}
                linkId={""}
                onClick={agregar}
            />
            <BotonesRestarSumar
                accionRestar={restar}
                accionSumar={sumar}
                cantidad={cantidad}
            />
        </div>
    );
};
export default ItemCount;
