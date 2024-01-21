// Imports

// import Card from "./components/Props/ejercicios6-11/Card";
import ConditionalRenderAdvanced from "./components/Props/ejercicios6-11/ConditionalRenderAdvanced";
import ToggleVisibility from "./components/Props/ejercicios6-11/ToggleVisibility";
import UserList from "./components/Props/ejercicios6-11/UserList";
// import ConditionalRender from "./components/Props/ejercicios6-11/ConditionalRender";
// import Contador from "./components/UseState/Contador";
// import ContadorDoble from "./components/UseState/ContadorDoble";
// import DarkLightMode from "./components/UseState/DarkLightMode";
// import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
// import ComponenteProps from "./components/Props/ComponenteProps";
// import GitHubUsers from "./components/Props/UseEffect/GitHubUserCardApi/GitHubUsers";
// import CustomButton from "./components/Props/ejercicios6-11/CustomButton";
// import ResizeListener from "./components/Props/UseEffect/ResizeListener";
// import UseEffectBasic from "./components/Props/UseEffect/UseEffectBasic";
// import Bienvenido from "./components/UseState/Bienvenido";
// import BotonConEvento from "./components/UseState/BotonConEvento";
// import ElementoConEstilo from "./components/UseState/ElementoConEstilo";
// import Header from "./components/UseState/Header";
// import ListaNombres from "./components/UseState/ListaNombres";
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

  // const handleButtonClick = () => {
  //   alert('¡Botón clickeado!');
  // }

  const userList = ["Aarón", "Bárbara", "Leo"];

  // Funciones del componente
  return(
    <>
      <div>
          <h1>Ejemplos básicos de React</h1>
          <hr />
          {/* <Bienvenido />  {/*  Ejercicio 1 */}
          {/* <ListaNombres /> Ejercicio 2 */}
          {/* <BotonConEvento /> Ejercicio 3 */}
          {/* <Header /> Ejercicio 4 */}
          {/* <ElementoConEstilo /> Ejercicio 5 */}
          {/* <ComponenteProps /> */}
          {/* <UseEffectBasic /> */}
          {/* <ResizeListener /> */}
          {/* <GitHubUsers /> */}
          {/* <CustomButton backgroundColor="green" text="Haz click" onClick={handleButtonClick} /> */}
          {/* <ConditionalRender condition = {2+2===5}/> */}
          {/* <Card title="Éste es el título" body="Éste es el contenido" footer="Éste es el footer" /> */}
          <ToggleVisibility />
          <UserList users={userList} />
          <ConditionalRenderAdvanced />
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
