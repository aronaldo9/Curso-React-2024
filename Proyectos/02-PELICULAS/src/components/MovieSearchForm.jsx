import { useState } from "react";
import useDataApi from "../hooks/useDataApi";
import ErrorMoviePage from "../pages/ErrorMoviePage";

const MovieSearchForm = () => {
  const apiKey = import.meta.env.VITE_API_TOKEN;
  const apiEndpoint =
    "https://api.themoviedb.org/3/discover/movie/?&language=es-es&sort_by=popularity.desc&api_key=" +
    apiKey;

  // const { data, loading, error } = useDataApi(apiEndpoint);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);

    if(searchTerm.trim() === ""){
        // entonces guardo en el filtrado de peliculas el estado inicial. [];
        setFilteredMovies([]);
    } else {
        const filteredResults = data?.results.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        setFilteredMovies(filteredResults || []);
    }
  }

  function handleDelete() {
    setSearchQuery("");
    setFilteredMovies([]);
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form
        className="w-1/2 bg-gray-800 p-4 rounded-lg flex ites-center"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Buscar película"
          className="w-full bg-gray-700 text-white rounded-md focus:outline-none p-2"
        />
        <button
          type="submit"
          className="ml-2 bg-sky-800 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none"
        >
          Buscar
        </button>
        
        {searchQuery && (
            <button
                type="submit"
                className="ml-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none"
                onClick={handleDelete}
            >
                Borrar
            </button>
        )};
        
      </form>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
            {loading && <Spinner />} 
            {/* si hace esto de arriba, ya no hace lo siguiente...son sentencias de cortocircuito */}
            {error && <ErrorMoviePage />}
            {}
      </div>
    </div>
  );
};

export default MovieSearchForm;
