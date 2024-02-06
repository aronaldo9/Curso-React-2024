import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase";

// ------------ Datos de la colección --------------
const productosCollection = collection(db, "crud-react-productos");

/// ------------ Añadir Productos-------------
export const addProducto = async (productoData) => {
    try {
        const docRef = await addDoc(productosCollection, productoData);
        return docRef.id;
    } catch (error) {
        console.log("Error al añadir un producto", error);
        throw error;
    }
}


/// ----------- Cargar Productos ---------------
export const getProductos = async () => {
    try {
       const data = await getDocs(productosCollection); 
       return data.docs.map(doc => ({...doc.data(), id:doc.id}));
    } catch (error) {
        console.log("Error al obtener los productos", error);
        throw error;
    }
}