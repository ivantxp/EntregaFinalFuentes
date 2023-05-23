import { ToastContainer, toast } from "react-toastify";
import "./CheckOutForm.css";
import Boton from "../Boton/Boton";
const CheckOutForm = ({ finalizar }) => {
    function alerta(texto) {
        toast.warn(`${texto}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    function validacionNumerica(aValidar) {
        let esValido = true;
        for (let i = 0; i < aValidar.length; i++) {
            if (isNaN(aValidar[i]) === false) {
                alerta("No puede ingresar numeros en nombre o apelldio");
                console.log("No puede ingresar numeros en nombre o apelldio");
                esValido = false;
                break;
            }
        }
        return esValido;
    }

    function validacionVacio(aValidar) {
        let esValido = true;
        if (aValidar === "") {
            alerta("A dejado campos vacios");

            esValido = false;
        }
        return esValido;
    }
    function validacionEmail(aValidar) {
        const caracteresUtitles = /^[a-zA-Z0-9.@]*$/;
        let esValido = true;
        if (caracteresUtitles.test(aValidar) === false) {
            alerta(
                "Ingrese solo letras, números, punto y arroba em campo mail"
            );

            esValido = false;
        }
        return esValido;
    }

    function preparacionEnvio(e) {
        e.preventDefault();
        const formValue = {
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            cel: e.target.cel.value,
            email: e.target.email.value,
        };

        const esValido =
            validacionNumerica(formValue.nombre) &&
            validacionNumerica(formValue.apellido) &&
            validacionVacio(formValue.nombre) &&
            validacionVacio(formValue.apellido) &&
            validacionVacio(formValue.cel) &&
            validacionVacio(formValue.email) &&
            validacionEmail(formValue.email);

        if (esValido) {
            finalizar(
                formValue.nombre,
                formValue.apellido,
                formValue.email,
                formValue.cel
            );
        }
    }

    return (
        <form onSubmit={preparacionEnvio} className={"form_contenedor "}>
            <h2 className="tipografia_Titulo titulo_checkout">
                Confirmacion pedido
            </h2>
            <input
                type="text"
                name="nombre"
                placeholder="Ingrese su Nombre"
                className={"imputForm fuente_textos"}
            />
            <input
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
                className={"imputForm fuente_textos"}
            />
            <input
                type="number"
                name="cel"
                placeholder="telefono"
                className={"imputForm fuente_textos"}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                className={"imputForm fuente_textos"}
            />
            <div className={"form_botones boton_form"}>
                <button
                    type="submit"
                    className="boton_generico boton_finalizar fuente_textos">
                    Finalizar
                </button>

                <Boton
                    texto={"Volver carrito"}
                    agregadoClasse={
                        "boton_generico volver_carrito fuente_textos"
                    }
                    linkId={"/card"}
                />
                <ToastContainer />
            </div>
        </form>
    );
};

export default CheckOutForm;
