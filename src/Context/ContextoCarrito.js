import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ContextoCarrito = createContext({ carrito: [] });

const ContextoCarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [sumarItem, setSumarItem] = useState();

    function yaAgregado(comparacion) {
        return carrito.some((el) => el.id === comparacion);
    }

    function agregarCarrito(item, cantidad) {
        if (!yaAgregado(item.id)) {
            setCarrito((copia) => [...copia, { ...item, cantidad }]);
        } else {
            toast("producto ya existentes actualizo cantidad");
            const copia = carrito.slice();
            const indice = carrito.findIndex((el) => el.id === item.id);
            const catidadAnterior = carrito[indice].cantidad;
            copia[indice].cantidad = catidadAnterior + cantidad;
            setCarrito(copia);
        }
    }

    function sumaCantidadTotal() {
        const suma = carrito.reduce(
            (total, producto) => total + producto.cantidad,
            0
        );
        return suma;
    }

    function sumarEnCarrito(idItem, stockItem) {
        const itemELejido = carrito.findIndex((el) => el.id === idItem);
        if (carrito[itemELejido].cantidad < stockItem) {
            const copia = carrito[itemELejido].cantidad + 1;
            setSumarItem(copia);
            carrito[itemELejido].cantidad = copia;
        }
        return sumarItem;
    }

    function restarEnCarrito(idItem) {
        const itemELejido = carrito.findIndex((el) => el.id === idItem);
        if (carrito[itemELejido].cantidad > 1) {
            const copia = carrito[itemELejido].cantidad - 1;
            setSumarItem(copia);
            carrito[itemELejido].cantidad = copia;
        }
        return sumarItem;
    }

    function quitar(idPasado) {
        const carritoActualizado = carrito.filter((el) => el.id !== idPasado);
        setCarrito(carritoActualizado);
    }

    function limpiar() {
        setCarrito([]);
    }

    function totalGastado() {
        const extraccion = carrito.map((el) => el.Precio * el.cantidad);
        const total = extraccion.reduce(
            (acumulador, numero) => acumulador + numero,
            0
        );
        return total;
    }

    return (
        <ContextoCarrito.Provider
            value={{
                agregarCarrito,
                limpiar,
                sumaCantidadTotal,
                quitar,
                totalGastado,
                sumarEnCarrito,
                restarEnCarrito,
                carrito,
            }}>
            {children}
        </ContextoCarrito.Provider>
    );
};

export default ContextoCarritoProvider;
