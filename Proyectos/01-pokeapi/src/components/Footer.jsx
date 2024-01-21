// Footer.jsx

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importa los íconos necesarios

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="flex justify-center items-center">
        <p className="mr-2">Creado por AarónPF</p>
        <div className="flex space-x-4">
          <a href="https://github.com/aronaldo9" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-500 cursor-pointer" size={24} />
          </a>
          <a href="https://linkedin.com/in/aarón-pesqueira-fariña-220b472a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-gray-500 cursor-pointer" size={24} />
          </a>
          <a href="https://twitter.com/aronconcola" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-500 cursor-pointer" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
