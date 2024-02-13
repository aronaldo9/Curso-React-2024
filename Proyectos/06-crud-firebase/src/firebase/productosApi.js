import {
    GoogleAuthProvider,
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  
  import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  // ---------- Dados de la colección ---------
  const productosCollection = collection(db, "Crud-react-productos");
  
  /// ----------- Añadir productos ----------
  export const addProducto = async (productoData) => {
    try {
      const docRef = await addDoc(productosCollection, productoData);
      return docRef.id;
    } catch (error) {
      console.log("Error al añadir un producto", error);
      throw error;
    }
  };
  
  // ------------- Cargar Productos -------------
  
  export const getProductos = async () => {
    try {
      const data = await getDocs(productosCollection);
      return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.log("Error al obtener los productos", error);
      throw error;
    }
  };

  // -------- Cargar datos de un producto cuyo id es... -------------

  export const getProductById = async (productId) => {
    try {
      const productDocRef = doc(productosCollection, productId);
      const productDoc = await getDoc(productDocRef)
      if(productDoc.exists()) {
        return { ...productDoc.data(), id: productDoc.id}
      }else {
        console.error("El producto con id dado no existe");
        return null;
      }
    } catch (error) {
      console.log("Error al obtener el producto", error);
      throw error;
    }
  }


  
  // --------------- Eliminar Productos ------------
  
  export const deleteProducto = async (id) => {
    try {
      // seleccionar el documento con ese id
      const productDocRef = doc(productosCollection, id);
      // borrar el documento seleccionado
      await deleteDoc(productDocRef);
    } catch (error) {
      console.log("Error deleting", error);
      throw error;
    }
  };

  // ---------- Edit Product by Id -----------
  export const editProduct = async (idProduct, newData) => {
    try {
      const productDocRef = doc(productosCollection, idProduct);
      await updateDoc(productDocRef, newData);
    } catch (error) {
      console.log("Error updating product", error);
      throw error;
    }
  }

  // Iniciar sesión con google
  export const singWithGoogle = async (signInFirebase, setError, navigate) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserSessionPersistence);
  
      const result = await signInWithPopup(auth, provider);
      // result trae TODA LA INFORMACIÓN de la cuenta seleccionada.
      const user = result.user;
      // aquí mando el usuario al contexto global
      signInFirebase(user);
      console.log(user);
      navigate("/");
    } catch (error) {
      setError(`Error  al iniciar sesión: ${error}`);
    }
  };

  // Cerrar sesión
  export const cerrarSesion = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      console.log("Error al cerrar sesión", error);
      return false;
    }
  }