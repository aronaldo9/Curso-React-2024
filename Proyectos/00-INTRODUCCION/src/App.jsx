// Imports

// import Contador from "./components/UseState/Contador";
// import ContadorDoble from "./components/UseState/ContadorDoble";
// import DarkLightMode from "./components/UseState/DarkLightMode";
// import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
import Bienvenido from "./components/UseState/Bienvenido";
import BotonConEvento from "./components/UseState/BotonConEvento";
import ElementoConEstilo from "./components/UseState/ElementoConEstilo";
import Header from "./components/UseState/Header";
import ListaNombres from "./components/UseState/ListaNombres";
// import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
// import TodoList from "./components/UseState/TodoList";

// Declaración variables globales

const App = () => {
  // Hooks

  // Declaración variables locales

  // const texto = "hola";
  // const numero = 5;
  // const array = ["pera", "manzana", "platano", "uva", "fresa"];
  // const objeto = {
  //   nombre: "Aarón",
  //   edad: "44",
  // };

  // Funciones del componente
  return(
    <>
      <div>
          <h1>Ejemplos básicos de React</h1>
          <hr />
          <Bienvenido />  {/*  Ejercicio 1 */}
          <ListaNombres /> {/* Ejercicio 2 */}
          <BotonConEvento /> {/* Ejercicio 3 */}
          <Header /> {/* Ejercicio 4 */}
          <ElementoConEstilo /> {/* Ejercicio 5 */}
      </div>
      
    </>
  );  

  // return (
  //   <>
  //     <h1>Ejemplo básico JSX</h1>
  //     <h2>Variables y Objetos en JSX</h2>
  //     <div>
  //       <h3>La variable texto vale {texto}</h3>
  //       <h3>La variable numero vale {numero}</h3>
  //       <h3>
  //         La variable array vale:
  //           <ul>
  //             {array.map((fruta, index) => (
  //               <li key={index}>{fruta}</li>
  //             ))}
  //           </ul>
  //       </h3>
  //       <h3>El nombre del objeto es: {objeto.nombre}</h3>
  //       <h3>La edad del objeto es: {objeto.edad}</h3>
  //     </div>
  //   </>
  // );
};

export default App;
