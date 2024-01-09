import { useState } from "react";

// Declaración variables globales
const initialState = 0;

const Contador = () => {
    // declaramos los HOOKS
    const [counter, setCounter] = useState(initialState);

    // declaración de funciones
    function handleIncrement() {
        setCounter(counter+1);
        // así es como se debería hacer para asegurarnos traer siempre el último valor de la variable
        setCounter((prevCounter) => prevCounter+1);
    }

    function handleDecrement(value) {
        setCounter(counter-value);
    }

  return (
    <>
        <h1>Ejemplo de contador en React</h1>
        <h2>El contador vale {counter}</h2>
        <button onClick={handleIncrement}>Incrementar Contador</button>
        <button onClick={() => handleDecrement(5)}>Decrementar Contador</button>

    </>
    
  )
}

export default Contador;
