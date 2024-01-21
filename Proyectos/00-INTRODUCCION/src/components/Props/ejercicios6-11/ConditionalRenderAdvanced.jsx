import { useState } from "react";


const ConditionalRenderAdvanced = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('user');

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUserRole('admin');
      };

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className="w-1/2 mx-auto bg-gray-200 rounded shadow-md mt-4 flex items-center justify-center">
        {isLoggedIn ? (
            <div className="flex flex-col items-center justify-center">
                <p>Bienvenido, usuario</p>
                {userRole === 'admin' && <p>Tienes privilegios de administrador</p>}
                <button onClick={handleLogout} className='bg-blue-500 text-white px-4 py-2 mb-4 rounded shadow-md '>Cerrar sesión</button>
            </div>
        ) : (
            <div>
                <p>Por favor, inicia sesión para acceder</p>
                <button onClick={handleLogin} className='bg-blue-500 text-white px-4 py-2 mb-4 rounded shadow-md'>Iniciar sesión</button>
                
            </div>
            
        )  
        }
        </div>
    );
}

export default ConditionalRenderAdvanced;
