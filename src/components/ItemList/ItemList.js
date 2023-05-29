import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ productos }) => {
    const { categoryFabricante } = useParams();
    return (
        <div>
            <p className="contenedor_navegacion fuente_textos">
                <Link className="navegacion " to={"/"}>
                    {categoryFabricante ? "Inicio/" : ""}
                </Link>
                <span className="navegacion ">{categoryFabricante}</span>
            </p>
            <div className="listado_productos">
                {productos.map((el) => {
                    return <Item key={el.id} {...el} />;
                })}
            </div>
        </div>
    );
};

export default ItemList;
