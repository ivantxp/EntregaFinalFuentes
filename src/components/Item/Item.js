import Boton from "../Boton/Boton";
import "./Item.css";

const Item = ({ Img, Nombre, Fabricante, Precio, id }) => {
    return (
        <div className="contenedor_producto">
            <img className="img_producto" src={Img} alt="imagen producto" />
            <div className="contendor_img">
                <h3 className="letras_fondo tipografia_Titulo">
                    {Fabricante.toUpperCase()}
                </h3>
            </div>

            <div className="pre_descricion">
                <h3 className="titulo_producto">{Nombre}</h3>
                <p className="pre_precio fuente_textos">{Precio} €</p>
                <Boton
                    texto={"Ver detalles"}
                    agregadoClasse={"boton_detalles fuente_textos"}
                    linkId={`/item/${id}`}
                />
            </div>
        </div>
    );
};

export default Item;
