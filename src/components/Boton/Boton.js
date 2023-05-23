import { Link } from "react-router-dom";
import "./Boton.css";

const Boton = (props) => {
    return (
        <Link to={props.linkId !== "" ? props.linkId : "#"}>
            <button
                className={"boton " + props.agregadoClasse}
                onClick={props.onCLick !== "" ? props.onCLick : null}
                type={props.type !== "" ? props.type : null}>
                {props.texto}
            </button>
        </Link>
    );
};

export default Boton;
