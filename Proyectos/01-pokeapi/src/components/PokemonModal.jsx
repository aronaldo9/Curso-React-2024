import React from 'react';

const PokemonModal = ({ id, name, image, stats, types, moves, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center opacity-100 visible transition-opacity ease-in-out duration-500`}>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="z-10 bg-white p-4 rounded-lg max-w-2xl">
        <img src={image} alt={name} className="w-full rounded" />
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-600">ID: {id}</p>
        <p className="text-gray-600">Stats: {stats}</p>
        <p className="text-gray-600">Types: {types.join(', ')}</p>
        <div className="text-gray-600">
          <p>Moves:</p>
          <ul>
            {moves.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
        <button onClick={onClose} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;
