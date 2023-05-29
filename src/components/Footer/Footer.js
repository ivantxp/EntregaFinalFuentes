import "./Footer.css";
import linkedin from "../../Img/iconos/linkedin.png";
import github from "../../Img/iconos/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer">
            <p className="fuente_textos texto_footer">
                Creada por Developer Ivan Fuentes
            </p>
            <Link to="https://github.com/ivantxp" target="_blank">
                <img
                    src={github}
                    alt="icono github"
                    className="icono_link_externo"
                />
            </Link>
            <Link
                to="https://www.linkedin.com/in/ivan-fuentes-it/"
                target="_blank">
                <img
                    src={linkedin}
                    alt="icono linkedin"
                    className="icono_link_externo"
                />
            </Link>
        </section>
    );
};

export default Footer;
