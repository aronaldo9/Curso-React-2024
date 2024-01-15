
const Bienvenido = () => {
  const isLoggedIn = true; // Puedes cambiar esto a false para probar el otro mensaje

  return (
    <h1 className='text-2xl mb-4 font-bold text-center'>
      {isLoggedIn ? "Bienvenido" : "Por favor, inicia sesión"}
    </h1>
  );
};

export default Bienvenido;
