import "./Header.css";
import CartWidget from "../cartWidget/CartWidget";
import IconoMenu from "../IconoMenu/IconoMenu";
import lupa from "../img/iconos/lupa.png";
import IconoBoton from "../IconosBotones/IconoBoton";
import NavbarFutura from "../navbarFutura/NavbarFutura";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Header = (props) => {
    return (
        <header>
            <div className="encabezado">
                <div className="desplegableIzquierdo">
                    <IconoMenu mostrarOcultar={props.cambioEstado} />
                    <IconoBoton
                        contenido={
                            <img
                                src={lupa}
                                className="img_lupa"
                                alt="carrito"
                            />
                        }
                        texto={"Buscar"}
                    />
                </div>
                <li>
                    <NavLink
                        className="titulo_principal tipografia_Titulo"
                        to={"/"}>
                        <h1>TOTAL EUC</h1>
                    </NavLink>
                </li>
                <CartWidget />
            </div>
            <NavBar />
            <NavbarFutura estadoAbreCierra={props.estado} />
        </header>
    );
};

export default Header;
