import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import CargandoContainer from "../CargandoContainer/CargandoContainer";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/fireBase/firebase";

const ItemDetailContainer = () => {
    const [productosIndividual, setproductosIndividual] = useState();
    const [cargando, setCargando] = useState(false);

    const { itemId } = useParams();

    useEffect(() => {
        setCargando(true);

        const docElejido = doc(db, "ruedas", itemId);

        getDoc(docElejido)
            .then((resolve) => {
                const data = resolve.data();
                const respuestaParseada = { id: resolve.id, ...data };
                setproductosIndividual(respuestaParseada);
            })
            .catch((rejet) => {
                console.log("error");
            })
            .finally(() => setCargando(false));
    }, [itemId]);
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
        return <ItemDetail {...productosIndividual} />;
    }
};

export default ItemDetailContainer;
