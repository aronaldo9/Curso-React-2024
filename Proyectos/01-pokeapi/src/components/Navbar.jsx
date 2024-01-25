// Navbar.jsx
import { useState } from 'react';
import logo from '../assets/images/logo.fw.svg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <img className="h-20 bg-transparent" src={logo} alt="Logo" />
      {/* Menú de hamburguesa para pantallas pequeñas */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>
      {/* Menú de navegación */}
      <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="/" className="block lg:inline-block text-white mx-2 hover:text-gray-500">Home</a>
        <a href="/about" className="block lg:inline-block text-white mx-2 hover:text-gray-500">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
