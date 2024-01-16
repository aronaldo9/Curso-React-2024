// import React from 'react'

import { useState } from "react";

const Titulo = (props) => {
    return(
        <h2 className="text-xl2 font-bold">{props.children}</h2>
    )
};

const Card = (props) => {
    // Este es el componente hijo
    // console.log(props);
    const { title, description, bgColor, count} = props;
    return(
        <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <p className="mt-2"><Titulo count={count}>{""}Soy el título y el count del padre es: {count}{""}</Titulo></p>
        </div>
    )
}

const ComponenteProps = () => {
    const [count, setCount] = useState(0);
    // éste es el componente padre
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400'>
        <h1 className="text-xl font-bold">El count vale: {count}</h1>
      <Card 
        title="Tarjeta1" 
        description="Contenido de la tarjeta 1" 
        bgColor="bg-green-200"
        count={count}
        setCount={setCount}
        />
      <Card 
        title="Tarjeta2" 
        description="Contenido de la tarjeta 1" 
        bgColor="bg-green-300"
        />
      <Card 
        title="Tarjeta3" 
        description="Contenido de la tarjeta 1" 
        bgColor="bg-green-400"
        />
      <Card 
        title="Tarjeta4" 
        description="Contenido de la tarjeta 1" 
        bgColor="bg-green-500"
        />
    </div>
  )
}

export default ComponenteProps
