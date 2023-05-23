import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemCountContainer = () => {
    const [estadoCantidad, setEstadoCantidad] = useState(0);

    function sumar() {
        setEstadoCantidad(estadoCantidad + 1);
    }
    function restar() {
        estadoCantidad > 0 && setEstadoCantidad(estadoCantidad - 1);
    }
    return (
        <ItemCount sumar={sumar} restar={restar} cantidad={estadoCantidad} />
    );
};
export default ItemCountContainer;
