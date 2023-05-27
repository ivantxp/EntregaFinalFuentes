import "./Header.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Header = (props) => {
    return (
        <header>
            <div className="encabezado">
                <div></div>
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
        </header>
    );
};

export default Header;
