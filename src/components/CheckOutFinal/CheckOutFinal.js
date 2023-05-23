import Boton from "../Boton/Boton";
import "./CheckOutFinal.css";

const CheckOutFinal = ({ id, usuario }) => {
    return (
        <div className="fuente_textos contenedro_checkOutFinal">
            <div className="sub_contenedro_checkOutFinal">
                <p>
                    Gracias por su compra <span>{usuario.nombre}</span>
                </p>
                <p>
                    El numero de su orden es: <span>{id}</span>
                </p>
                <p>
                    Resivira una copia de su orden al email :{" "}
                    <span>{usuario.email}</span>
                </p>
                <p>
                    En breve nos contataremos usted al{" "}
                    <span>{usuario.cel}</span>
                </p>
            </div>
            <Boton
                texto={"Volver a productos"}
                agregadoClasse={"boton_agregar fuente_textos"}
                linkId={"/"}
            />
        </div>
    );
};
export default CheckOutFinal;
