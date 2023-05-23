import { useState } from "react";
import "./NavbarFutura.css";
import { Link } from "react-router-dom";
const NavbarFutura = (props) => {
    const [desplegar, SetDesplegar] = useState(false);
    function desplegarSubCategoria() {
        SetDesplegar(!desplegar);
    }
    /* ${
                props.estadoAbreCierra ? "ocultar" : "mostrar"
            } */
    return (
        <nav className={`nav_desplegable ocultar`}>
            <ul className="ul_nav">
                <li className="li_nav">
                    <div
                        className="nav_contenerdor_accion"
                        onClick={desplegarSubCategoria}>
                        <p className="p_nav">PRODUTOS</p>
                        {/*             <button
                            className="boton_mas"
                            onClick={desplegarSubCategoria}>
                            +
                        </button> */}
                    </div>

                    <ul
                        className={`sub_ul_nav ${
                            desplegar ? "abrir" : "cerrar"
                        }`}>
                        <li className="li_sub_nav">
                            <Link to={"/"} onClick={desplegarSubCategoria}>
                                Inicio
                            </Link>
                        </li>
                        <li className="li_sub_nav">
                            <Link
                                to={"/category/Begode"}
                                onClick={desplegarSubCategoria}>
                                Begode
                            </Link>
                        </li>
                        <li className="li_sub_nav">
                            <Link
                                to={"/category/Inmotion"}
                                onClick={desplegarSubCategoria}>
                                Inmotion
                            </Link>
                        </li>
                        <li className="li_sub_nav">
                            <Link
                                to={"/category/Kingsong"}
                                onClick={desplegarSubCategoria}>
                                Kigsong
                            </Link>
                        </li>
                        <li className="li_sub_nav">
                            <Link
                                to={"/category/Veteran"}
                                onClick={desplegarSubCategoria}>
                                Veteran
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* 
                <li className="li_nav">
                    <div className="nav_contenerdor_accion">
                        <p className="p_nav">Noticiass</p>
                        <button
                            className="boton_mas"
                            onClick={desplegarSubCategoria}>
                            +
                        </button>
                    </div>
                    <ul
                        className={`sub_ul_nav ${
                            desplegar ? "abrir" : "cerrar"
                        }`}>
                        <li className="li_sub_nav">neuvos productos</li>
                        <li className="li_sub_nav">Promociones</li>
                        <li className="li_sub_nav">infomracion</li>
                        <li className="li_sub_nav">Tutoriales</li>
                    </ul>
                </li>
                <li className="li_nav">
                    <div className="nav_contenerdor_accion">
                        <p className="p_nav">productos</p>
                        <button
                            className="boton_mas"
                            onClick={desplegarSubCategoria}>
                            +
                        </button>
                    </div>
                    <ul
                        className={`sub_ul_nav ${
                            desplegar ? "abrir" : "cerrar"
                        }`}>
                        <li className="li_sub_nav">Ruedas</li>
                        <li className="li_sub_nav">Accesorios</li>
                        <li className="li_sub_nav">Ropa</li>
                    </ul>
                </li>
                <li className="li_nav">
                    <div className="nav_contenerdor_accion">
                        <p className="p_nav">Usuario</p>
                        <button
                            className="boton_mas"
                            onClick={desplegarSubCategoria}>
                            +
                        </button>
                    </div>
                    <ul
                        className={`sub_ul_nav ${
                            desplegar ? "abrir" : "cerrar"
                        }`}>
                        <li className="li_sub_nav">Videos</li>
                        <li className="li_sub_nav">fotos</li>
                    </ul>
                </li> */}
            </ul>
        </nav>
    );
};
export default NavbarFutura;
