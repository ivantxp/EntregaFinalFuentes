import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getProdutosColeccion = () => {
    const ruedasColeccion = collection(db, "ruedas");
    const consulta = getDocs(ruedasColeccion);

    console.log(ruedasColeccion);
    console.log(consulta);

    consulta.then((respuesta) => {
        console.log("funciona");
        const respuestaParseada = respuesta.docs.map((doc) => {
            const producto = {
                id: doc.id,
                ...doc.data(),
            };
            return producto;
        });
        console.log(respuestaParseada);
        return respuestaParseada;
    });
};
getProdutosColeccion();

const saveProductos = () => {
    //sss
};
const getProductosDetail = () => {
    //sss
};
