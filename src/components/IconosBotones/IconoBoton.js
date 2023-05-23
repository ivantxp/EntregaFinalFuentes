import "./IconoBoton.css";
const IconoBoton = (props) => {
    return (
        <>
            <button className="icono_boton">
                {props.contenido}
                {props.texto}
            </button>
            ;
        </>
    );
};
export default IconoBoton;
