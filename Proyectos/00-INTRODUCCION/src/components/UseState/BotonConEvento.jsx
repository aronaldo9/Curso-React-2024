

const BotonConEvento = () => {
    const handleClick = () => {
        console.log("Has clickado en el botón");
    };

    return(
        <div className="text-center">
            <button onClick={handleClick} className="bg-blue-500 text-white font-bold mt-4 py-2 px-4 rounded mx-auto">
                Presionar Botón
            </button>
        </div>
    );
};

export default BotonConEvento;