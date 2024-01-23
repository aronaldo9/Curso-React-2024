import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import PokemonModal from './components/PokemonModal';

const URL = import.meta.env.VITE_URL_POKEAPI;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handleDelete(id) {
    const updatePokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatePokemons);
  }

  const handleOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        const results = data.results;
        const fetchedPokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const resp = await fetch(pokemon.url);
            const pokemonDetails = await resp.json();

            const stats = pokemonDetails.stats || [];
            const avgStat =
              stats.reduce((acc, stat) => acc + stat.base_stat, 0) / stats.length;
            const truncatedAvgStat = avgStat.toFixed(2);

            const colorClass =
              avgStat <= 33
                ? 'bg-red-200'
                : avgStat <= 66
                ? 'bg-yellow-200'
                : 'bg-green-200';

            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image:
                pokemonDetails?.sprites.other.dream_world.front_default ||
                pokemonDetails.sprites.front_default ||
                '',
              avgStat: truncatedAvgStat,
              colorClass: colorClass,
              types: pokemonDetails.types.map((type) => type.type.name),
              moves: pokemonDetails.moves.slice(0, 5).map((move) => move.move.name),
            };
          })
        );
        setPokemons(fetchedPokemonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center cursor-pointer">
        {loading ? (
          <Spinner />
        ) : (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="hover:scale-110">
              <PokemonCard
                pokemon={pokemon}
                handleDelete={handleDelete}
                openModal={() => handleOpenModal(pokemon)}
              />
            </div>
          ))
        )}
      </div>
      <Footer />
      {selectedPokemon && (
        <PokemonModal
          id={selectedPokemon.id}
          name={selectedPokemon.name}
          image={selectedPokemon.image}
          stats={selectedPokemon.avgStat}
          types={selectedPokemon.types}
          moves={selectedPokemon.moves}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
