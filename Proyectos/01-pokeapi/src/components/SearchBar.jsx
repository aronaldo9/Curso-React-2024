import { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);
    }

    return (
        <div className='flex flex-col items-center justify-center m-2'>
            <p>Aquí puedes buscar tu Pokemon:</p>
            <input 
            type="text"
            placeholder='Buscar Pokemon'
            value={searchTerm}
            onChange={handleSearch}
            className="m-2 p-2 hover:bg-gray-800 hover:text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
    )
}

export default SearchBar;
