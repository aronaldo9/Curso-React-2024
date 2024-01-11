import { useState } from 'react';
import './DarkLightMode.css';

const DarkLightMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    function toggleTheme() {
      setDarkMode(!darkMode);
    }

  return (
    <>
        <div className={`default ${darkMode ? "dark" : "light"}`}>
            <h1>Cambio de color Tema</h1>
            <button onClick={toggleTheme}>{darkMode ? "Modo Claro" : "Modo Oscuro"}</button>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium corporis officiis deleniti reprehenderit illo quam corrupti dolorem ipsum reiciendis adipisci eveniet cum, autem aperiam vero ipsa doloremque! Autem, deleniti.
            </p>
        </div>
    </>
    
  )
}

export default DarkLightMode;
