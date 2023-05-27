import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { ContextoCarrito } from "../Context/ContextoCarrito";
import { ToastContainer } from "react-toastify";
import Boton from "../Boton/Boton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ItemDetail = ({
    id,
    Fabricante,
    Nombre,
    Precio,
    Img,
    Stock,
    Peso,
    Autonomía_real,
    Velocidad_tope,
    Suspensión,
    Ancho_del_neumático,
    Diámetro,
    Batería,
    Potencia_del_motor,
    Puntuación,
    Pantalla,
    Tamaño,
    Equipo_de_sonido,
    Tiempo_de_carga_de_fábrica,
    Descripción,
}) => {
    const [agregado, setAgregado] = useState(0);
    const [masDetallesCambio, SetMasDetallesCambio] = useState(false);
    const [cantidadParaPrecio, setCantidadParaPrecio] = useState(1 * Precio);
    const { agregarCarrito } = useContext(ContextoCarrito);
    function masDetalles() {
        SetMasDetallesCambio(!masDetallesCambio);
        console.log(masDetallesCambio);
    }

    function cantidad(cantidad) {
        setAgregado(cantidad);
        const item = { id, Nombre, Precio, Stock, Img, Fabricante };
        agregarCarrito(item, cantidad);
    }
    console.log(cantidadParaPrecio);
    return (
        <div className="">
            <p className="contenedor_navegacion fuente_textos">
                <Link className="navegacion " to={"/"}>
                    Produtos/
                </Link>
                <Link className="navegacion " to={`/category/${Fabricante}`}>
                    Fabricante/
                </Link>
                {Nombre}
            </p>

            <div className="contenedor_detalles">
                <div className="contenedor_derecha">
                    <p className="texto_fondo_detalle ">TOTAL EUC</p>
                </div>
                <div className="contenedor_izquierda">
                    <img
                        className="img_detalles"
                        src={Img}
                        alt="imagen producto"
                    />
                    <div className="sub_contenedor_iz">
                        <div className="nombre_detalles">
                            <h3 className=" tipografia_Titulo">
                                {Fabricante} {Nombre}
                            </h3>
                            <p className="fuente_textos">
                                Є{cantidadParaPrecio * Precio}
                            </p>
                        </div>
                        {masDetallesCambio === false ? (
                            <div className="pre_detalle">
                                <div className="texto_descricion fuente_textos">
                                    <p>{Descripción}</p>
                                    <Boton
                                        texto={"Mas Detalles"}
                                        onClick={masDetalles}
                                        agregadoClasse={
                                            "boton_mas_detalles fuente_textos"
                                        }
                                    />
                                </div>
                                <div
                                    className="porsentaje_puntuacion fuente_textos"
                                    label="Puntuacion">
                                    <CircularProgressbar
                                        value={Puntuación}
                                        text={`${Puntuación}`}
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: "rgb(139, 0, 0)",
                                            trailColor: "rgb(56, 56, 56)",
                                        })}
                                    />
                                    <p className="fuente_textos">Puntuacion</p>
                                </div>
                            </div>
                        ) : (
                            <div className="detalles_item">
                                <div className="ver_menos">
                                    <Boton
                                        agregadoClasse={"x"}
                                        texto={"x"}
                                        onClick={masDetalles}
                                    />
                                </div>

                                <ul className="contenedor_lista_detalle fuente_textos">
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/peso.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Peso}
                                            </p>
                                            <p className="detalle_inferior">
                                                Peso
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/fabricante.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Velocidad_tope}
                                            </p>
                                            <p className="detalle_inferior">
                                                Velocidad tope
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/autonomia.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Autonomía_real}
                                            </p>
                                            <p className="detalle_inferior">
                                                Autonomia real
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/amortiguador.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Suspensión}
                                            </p>
                                            <p className="detalle_inferior">
                                                Suspencion
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/ancho_rueda.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Ancho_del_neumático} pulgadas
                                            </p>
                                            <p className="detalle_inferior">
                                                Ancho rueda
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/diametro_rueda.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Diámetro} pulgadas
                                            </p>
                                            <p className="detalle_inferior">
                                                Diametro neumatico
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/tiempo_carga2.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Tiempo_de_carga_de_fábrica}
                                            </p>
                                            <p className="detalle_inferior">
                                                Timepo de carga
                                            </p>
                                        </div>
                                    </li>

                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/voltage.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Batería}
                                            </p>
                                            <p className="detalle_inferior">
                                                Bateria
                                            </p>
                                        </div>
                                    </li>

                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/motor.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Potencia_del_motor}
                                            </p>
                                            <p className="detalle_inferior">
                                                Potencia Motor
                                            </p>
                                        </div>
                                    </li>

                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/sonido.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Equipo_de_sonido}
                                            </p>
                                            <p className="detalle_inferior">
                                                Equipo de sonido
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/pantalla.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Pantalla}
                                            </p>
                                            <p className="detalle_inferior">
                                                Pantalla
                                            </p>
                                        </div>
                                    </li>
                                    <li className="lista_detalles">
                                        <img
                                            className="icono_detalle"
                                            src="../../../iconos_descricion/Tamaño.png"
                                            alt="icono fabricante"
                                        />
                                        <div className="sub_lista_detalles">
                                            <p className="detalle_superior">
                                                {Tamaño}
                                            </p>
                                            <p className="detalle_inferior">
                                                Tamaño
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <div className="botones_detalle">
                            {agregado > 0 ? (
                                <div className="">
                                    <Boton
                                        texto={"Terminar compra"}
                                        agregadoClasse={
                                            "boton_agregar fuente_textos botones_ya_agregados"
                                        }
                                        linkId={"/card"}
                                    />
                                    <Boton
                                        texto={"Continuar comprando"}
                                        agregadoClasse={
                                            "boton_agregar fuente_textos botones_ya_agregados"
                                        }
                                        linkId={"/"}
                                    />
                                </div>
                            ) : (
                                <ItemCount
                                    inicial={1}
                                    stock={Stock}
                                    Nombre={Nombre}
                                    Fabricante={Fabricante}
                                    cantidadPasada={cantidad}
                                    linkId={""}
                                    cantidadParaPrecio={setCantidadParaPrecio}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default ItemDetail;
