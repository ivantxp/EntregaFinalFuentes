import { useEffect, useState } from "react";
import Cargando from "../cargando/Cargando";
const CargandoContainer = ({ texto }) => {
    const [animacionCargando, setAnomacionCargando] = useState("");

    useEffect(() => {
        setTimeout(() => {
            return animacionCargando === "..."
                ? setAnomacionCargando(".")
                : setAnomacionCargando(animacionCargando + ".");
        }, 200);
    });
    return <Cargando animaPuntos={animacionCargando} texto={texto} />;
};

export default CargandoContainer;
