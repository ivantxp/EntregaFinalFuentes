import { useEffect, useState } from "react";
//import { getProductos, getProductosFiltrados } from "../../asyncMonk";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import CargandoContainer from "../CargandoContainer/CargandoContainer";
import { db } from "../../firebase";
import { query, where, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [productosBase, setProductosBase] = useState([]);
    const [cargando, setCargando] = useState(false);

    const { categoryFabricante } = useParams();

    useEffect(() => {
        setCargando(true);
        const pedidoArticulos = categoryFabricante
            ? query(
                  collection(db, "ruedas"),
                  where("Fabricante", "==", categoryFabricante)
              )
            : collection(db, "ruedas");
        getDocs(pedidoArticulos)
            .then((resolve) => {
                const respuestaParseada = resolve.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductosBase(respuestaParseada);
            })
            .catch((rejet) => {
                setProductosBase(rejet);
            })
            .finally(() => setCargando(false));
    }, [categoryFabricante]);
    //debugger;
    if (cargando === true) {
        return (
            <div className="pagina_cargado">
                <CargandoContainer
                    activacionAnimacion={cargando}
                    texto="cargando"
                />
            </div>
        );
    } else {
        return <ItemList productos={productosBase} />;
    }
};
export default ItemListContainer;
