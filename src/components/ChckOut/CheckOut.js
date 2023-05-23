import { addDoc, collection } from "firebase/firestore";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { db } from "../../firebase";
import { useContext, useState } from "react";
import { ContextoCarrito } from "../Context/ContextoCarrito";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CargandoContainer from "../CargandoContainer/CargandoContainer";
import CheckOutFinal from "../CheckOutFinal/CheckOutFinal";

const CheckOut = () => {
    const [ordenId, SetOrdenId] = useState("");
    const { totalGastado, carrito } = useContext(ContextoCarrito);
    const [cargando, setCargando] = useState(false);
    const [datosCompra, setdatosCompra] = useState(false);

    const { limpiar } = useContext(ContextoCarrito);

    async function finalizar(nombreForm, apellidoForm, emailForm, celForm) {
        const venta = {
            user: {
                nombre: nombreForm,
                apellido: apellidoForm,
                cel: celForm,
                email: emailForm,
            },
            productos: {
                ...carrito.map((el) => {
                    return {
                        id: el.id,
                        Nombre: el.Nombre,
                        Precio: el.Precio,
                        cantidad: el.cantidad,
                    };
                }),
            },
            total: totalGastado(),
        };

        const ventaCollection = collection(db, "ventas");
        setCargando(true);
        try {
            const ordenGenerada = await addDoc(ventaCollection, venta);
            const copia = { ...venta, id: ordenGenerada.id };

            SetOrdenId(copia);
            limpiar();
        } catch (error) {
            console.log("Error");
            console.log(error);
            toast("Error de carga de");
        } finally {
            setCargando(false);
            setdatosCompra(true);
        }
    }

    if (cargando === true) {
        return (
            <div className="pagina_cargado">
                <CargandoContainer
                    activacionAnimacion={cargando}
                    texto="Generando Orden"
                />
            </div>
        );
    } else if (datosCompra) {
        return (
            <CheckOutFinal
                id={ordenId.id}
                productos={[ordenId.productos]}
                usuario={ordenId.user}
            />
        );
    } else {
        return (
            <div>
                <CheckOutForm finalizar={finalizar} />
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
    }
};

export default CheckOut;
