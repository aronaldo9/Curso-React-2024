import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importamos el icono de la cruz

const PokemonModal = ({ name, types, moves, image, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  // Mapear tipos a colores
  const typeColors = {
    fire: 'linear-gradient(to right, #FDD835, #F4511E)',
    water: 'linear-gradient(to right, #4FC3F7, #2196F3)',
    grass: 'linear-gradient(to right, #CDDC39, #8BC34A)',
    electric: 'linear-gradient(to right, #FFFF00, #FFD600)',
    bug: 'linear-gradient(to right, #C6FF00, #8BC34A)',
    normal: 'linear-gradient(to right, #E0E0E0, #9E9E9E)',
    poison: 'linear-gradient(to right, #CE93D8, #9C27B0)',
    ground: 'linear-gradient(to right, #FFCC80, #FF9800)',
    fighting: 'linear-gradient(to right, #D32F2F, #B71C1C)',
    psychic: 'linear-gradient(to right, #FFC0CB, #FF1493)',
    ghost: 'linear-gradient(to right, #9FA8DA, #3949AB)',
    steel: 'linear-gradient(to right, #B0BEC5, #546E7A)',
    fairy: 'linear-gradient(to right, #F8BBD0, #EC407A)',
    flying: 'linear-gradient(to right, #81D4FA, #03A9F4)',
    rock: 'linear-gradient(to right, #A1887F, #5D4037)',
    ice: 'linear-gradient(to right, #B3E0F2, #4FC3F7)',
    dark: 'linear-gradient(to right, #424242, #1B1B1B)',
    dragon: 'linear-gradient(to right, #FFD700, #FFA000)',
  };

  // Obtener el color de fondo según el tipo de Pokémon
  const backgroundColor =
    types.length > 0 && typeColors[types[0]]
      ? typeColors[types[0]]
      : typeColors['normal'];

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
      <div
        className="bg-white p-8 rounded-md max-w-lg" // Ajustar el ancho según sea necesario
        style={{ background: backgroundColor }}
      >
        <div className="flex justify-end mb-4">
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
            <FaTimes size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <img
          className="mx-auto my-4 rounded-md"
          src={image}
          alt={name}
          loading="lazy"
          style={{ maxHeight: '200px' }}
        />
        <div className="mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Types:</span> {types.join(', ')}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Moves:</span>{' '}
            <ul>
              {moves.map((move, index) => (
                <li key={index}>{move}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
