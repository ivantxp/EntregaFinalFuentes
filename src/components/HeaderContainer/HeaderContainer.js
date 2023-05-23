import Header from "../header/Header";
import { useState } from "react";

const HeaderContainer = () => {
    const [estado, setEstado] = useState(false);
    function cambioEstadoFuncion() {
        setEstado(!estado);
    }
    return <Header cambioEstado={cambioEstadoFuncion} estado={estado} />;
};

export default HeaderContainer;
