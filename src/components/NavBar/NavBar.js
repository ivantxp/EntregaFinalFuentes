import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navegacion_bajo_titulo">
            <ul className="navegacion_bajo_titulo_interno">
                <li>
                    <NavLink className="texto_navegacion" to={"/"}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="texto_navegacion borde"
                        to={"/category/Veteran"}>
                        Veteran
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="texto_navegacion borde"
                        to={"/category/Inmotion"}>
                        Inmotion
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="texto_navegacion borde"
                        to={"/category/Kingsong"}>
                        Kingsong
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="texto_navegacion borde"
                        to={"/category/Begode"}>
                        Begode
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
