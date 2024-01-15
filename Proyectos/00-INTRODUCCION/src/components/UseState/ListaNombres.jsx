// import React from 'react';

const ListaNombres = () => {
  const nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Carlos'];

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Lista de Nombres</h2>
      <ul className="list-disc pl-4">
        {nombres.map((nombre, index) => (
          <li key={index} className="mb-2">{nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNombres;
