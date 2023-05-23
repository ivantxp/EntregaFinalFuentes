import "./BotonesRestarSumar.css";
const BotonesRestarSumar = ({ accionRestar, accionSumar, cantidad }) => {
    return (
        <div className="contedor_cantida">
            <button
                className="boton_agregar_i cantidad fuente_textos"
                onClick={accionRestar}>
                -
            </button>
            <p className="cantidad fuente_textos">{cantidad}</p>
            <button
                className="boton_agregar_d cantidad fuente_textos"
                onClick={accionSumar}>
                +
            </button>
        </div>
    );
};
export default BotonesRestarSumar;
