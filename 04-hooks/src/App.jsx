import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EjemploUseRefInput from './components/EjemploUseRefInput'
import EjemploUseRefForm from './components/EjemploUseRefForm'
import EjemploUseRefMutableData from './components/EjemploUseRefMutableData'
import InicioApp from './components/useContext/InicioApp'

function App() {
  const [count, setCount] = useState(0);
  const btnRef = useRef(null);

  function handleClickBtn() {
    setCount((count) => count +1);
    btnRef.current.style.background = "red";
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button 
          ref={btnRef}
          onClick={handleClickBtn}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr />
      <h2>Uso useRef</h2>
      <EjemploUseRefInput />
      <br />
      <EjemploUseRefForm />
      <br />
      <EjemploUseRefMutableData />
      <hr />
      <h2>Uso UseContext</h2>
      <br />
      <InicioApp />
    </>
  )
}

export default App
