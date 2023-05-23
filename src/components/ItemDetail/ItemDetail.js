import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { ContextoCarrito } from "../Context/ContextoCarrito";
import { ToastContainer } from "react-toastify";
import Boton from "../Boton/Boton";
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
}) => {
    const [agregado, setAgregado] = useState(0);

    const { agregarCarrito } = useContext(ContextoCarrito);

    function cantidad(cantidad) {
        setAgregado(cantidad);
        const item = { id, Nombre, Precio, Stock, Img, Fabricante };
        agregarCarrito(item, cantidad);
    }

    return (
        <div className="contenedor_detalles">
            <p className="contenedor_navegacion">
                <Link className="navegacion" to={"/"}>
                    Produtos/
                </Link>
                <Link className="navegacion" to={`/category/${Fabricante}`}>
                    Fabricante/
                </Link>
                {Nombre}
            </p>
            <div className="img_descricion">
                <div>
                    <h3 className="nombre_detalles">
                        {Fabricante} {Nombre}
                    </h3>

                    <ul className="contenedor_lista_detalle fuente_textos">
                        <li className="lista_detalles">
                            <img
                                className="icono_detalle"
                                src="../../../iconos_descricion/peso.png"
                                alt="icono fabricante"
                            />
                            <div className="sub_lista_detalles">
                                <p className="detalle_superior">{Peso}</p>
                                <p className="detalle_inferior">Peso</p>
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
                                <p className="detalle_superior">{Suspensión}</p>
                                <p className="detalle_inferior">Suspencion</p>
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
                                <p className="detalle_inferior">Ancho rueda</p>
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
                                <p className="detalle_superior">{Batería}</p>
                                <p className="detalle_inferior">Bateria</p>
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
                                src="../../../iconos_descricion/puntuacion.png"
                                alt="icono fabricante"
                            />
                            <div className="sub_lista_detalles">
                                <p className="detalle_superior">{Puntuación}</p>
                                <p className="detalle_inferior">Puntuacion</p>
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
                                <p className="detalle_superior">{Pantalla}</p>
                                <p className="detalle_inferior">Pantalla</p>
                            </div>
                        </li>
                        <li className="lista_detalles">
                            <img
                                className="icono_detalle"
                                src="../../../iconos_descricion/Tamaño.png"
                                alt="icono fabricante"
                            />
                            <div className="sub_lista_detalles">
                                <p className="detalle_superior">{Tamaño}</p>
                                <p className="detalle_inferior">Tamaño</p>
                            </div>
                        </li>
                    </ul>
                    <div className="img_descricion">
                        <img
                            className="img_detalles"
                            src={Img}
                            alt="imagen producto"
                        />
                    </div>
                </div>
            </div>
            <div>
                {agregado > 0 ? (
                    <div>
                        <Boton
                            texto={"Terminar compra"}
                            agregadoClasse={"boton_agregar fuente_textos"}
                            linkId={"/card"}
                        />
                        <Boton
                            texto={"Continuar comprando"}
                            agregadoClasse={"boton_agregar fuente_textos"}
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
                    />
                )}
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
