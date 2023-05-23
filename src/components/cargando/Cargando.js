import "./Cargando.css";

const Cargando = ({ animaPuntos, texto }) => {
    return (
        <div className="contenedor_cargando">
            <p className="tipografia_Titulo ">{texto}</p>
            <p className=" puntos">{animaPuntos}</p>
        </div>
    );
};

export default Cargando;
