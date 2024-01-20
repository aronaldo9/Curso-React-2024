
const CardGitHub = (props) => {
    const { avatar_url, login, html_url, openModal } = props;

    function handleClickImg() {
        openModal(avatar_url);
    }

    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5">
            <div className='relative mx-4 mt-6 h-40 overflow-visible rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-t from-blue-500 to-blue-900'>
                <img src={avatar_url} alt="" className='size-32 rounded-full my-4 mx-auto cursor-pointer' onClick={handleClickImg} />
            </div>
            <div className="p-6">
                <h5 className='mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-900 antialiased '>Usuario: {login}</h5>
                <p className='block font-mono text-base font-light leading-relaxed text-inherit antialised '>{html_url}</p>
            </div>
            <div className="p-6 pt-0">
                <button className="select-none rounded-lg bg-blue-950 py-3 px-6 text-center align-middle font-sans text-sm text-white font-bold uppercase shadow-md shadow-blue-800/20 transition-all hover:shadow-lg hover:shadow-blue-600/50">Ir al Github</button>
            </div>
            
        </div>
        
    )
}

export default CardGitHub;
