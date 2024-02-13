import { useAuthProduct } from "../context/authContextProduct"
import { cerrarSesion } from "../firebase/productosApi";

const SignOutButton = () => {
    const { signOutFirebase } = useAuthProduct();

    const handleSingOut = async () => {
        try {
           const cerradoCorrectamente = await cerrarSesion(); 
           if (cerradoCorrectamente) {
                signOutFirebase();
           }            
        } catch (error) {
                console.log("Error SignOut") 
        }
    }

    return (
        <button 
        onClick={handleSingOut} 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
            Cerrar Sesión
        </button>
    )
}

export default SignOutButton