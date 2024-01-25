import { useState } from "react";

const PokemonCard = (props) => {
  const { pokemon, handleDelete, openModal } = props;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClickDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      handleDelete(pokemon.id);
    }, 500);
  };

  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-md bg-white m-4 flex flex-col justify-center transform ${
        isDeleting ? "rotateY-180 scale-0" : "rotateY-0 scale-100"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className={`flex flex-col w-full ${pokemon.colorClass}`}>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto mt-4"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
          <p>Avg Stat: {pokemon.avgStat}</p>
        </div>
        <div className="mx-auto mb-4 flex flex-col">
        <button
            className={"bg-gray-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-gray-900 focus:outline-none mb-2"}
            onClick={(e) => {
              e.stopPropagation(); // Evitar que el clic llegue al contenedor y abra el modal
              openModal();
            }}
          >
            + INFO
          </button>
          
          <button
            className={"bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-900 focus:outline-none"}
            onClick={handleClickDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
