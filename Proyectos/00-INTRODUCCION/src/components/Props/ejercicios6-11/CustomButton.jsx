

const CustomButton = ({ backgroundColor, text, onClick }) => {
  const handleClick = () => {
    console.log('Botón personalizado clicado');
    if (onClick) {
      onClick();
    }
  };

  const estiloBoton = `bg-${backgroundColor || 'blue'} text-white px-4 py-2 rounded cursor-pointer`;

  return (
    <button className={estiloBoton} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;
