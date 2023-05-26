import { Link } from "react-router-dom";
import "./Boton.css";

const Boton = ({ linkId, agregadoClasse, onClick, type, texto }) => {
    return (
        <Link to={linkId !== "" ? linkId : "#"}>
            <button
                className={"boton " + agregadoClasse}
                onClick={onClick !== "" ? onClick : null}
                type={type !== "" ? type : null}>
                {texto}
            </button>
        </Link>
    );
};

export default Boton;
