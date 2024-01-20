import { useEffect } from "react";
import "./App.css";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

const App = () => {
  useEffect(() => {
      // Acceso a la Api de pokeapi
      // creo la función o la importo de un helper y después ejecuto la función
      const fetchData = async () => {
          try {
              const response = await fetch(URL);
              if(!response.ok) {
                  throw new Error
              }
              const data = await response.json();
              const results = data.results;
              const pokemonData = await Promise.all(
                  results.map(async (pokemon, index) => {
                      const resp = await fetch(pokemon.url);
                      const pokemonDetails = await resp.json();
                      return {
                          id: pokemonDetails.id,
                          name: pokemonDetails.name,
                          image: pokemonDetails.sprites.other.dream_world.front_default || "",
                          stats: pokemonDetails.stats.reduce((acc, stat) => acc + stat.base_stat, 0) / pokemonDetails.stats.length, // sacar media aritmética
                          // (0-33 ---> 1, 34-66 ---> 2, 67-100 ---> 3; cada rango un color de tarjeta)
                      };
                  })
              )
              // setear pokemonData en un estado que guarde los pokemons
              // setLoading(false)
          } catch (error) {
              throw new Error(error);
          }
      }
  
      // Ejecuto la función
      fetchData();
  }, [])
  

    return (
      <h1>PokeApi</h1>
    )
}

export default App;
