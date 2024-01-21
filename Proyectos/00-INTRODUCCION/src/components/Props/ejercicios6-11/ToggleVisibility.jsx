import { useState } from 'react';

const ToggleVisibility = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div className='w-[50%] mx-auto bg-gray-200 rounded shadow-lg flex flex-col items-center justify-content p-2'>
      <button onClick={toggleVisibility} className='bg-blue-500 text-white px-4 py-2 mb-4 rounded shadow-md'>Toggle Visibility</button>
      {isVisible && <p className='text-gray-800'>Éste es el párrafo a ocultar</p>}
    </div>
  )
}

export default ToggleVisibility;
