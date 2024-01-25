import { useState } from 'react';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSearchTerm('');
      onClear();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center m-2'>
      <p>Aquí puedes buscar tu Pokémon:</p>
      <input
        type="text"
        placeholder='Buscar Pokémon'
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="m-2 p-2 hover:bg-gray-800 hover:text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
