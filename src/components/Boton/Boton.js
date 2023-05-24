import { Link } from "react-router-dom";
import "./Boton.css";

const Boton = ({ linkId, agregadoClasse, onCLick, type, texto }) => {
    return (
        <Link to={linkId !== "" ? linkId : "#"}>
            <button
                className={"boton " + agregadoClasse}
                onClick={onCLick !== "" ? onCLick : null}
                type={type !== "" ? type : null}>
                {texto}
            </button>
        </Link>
    );
};

export default Boton;
