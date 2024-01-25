import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootMovieLAyout = () => {
  return (
    <>
        <Header />
        <main>
            {/* Aquí van los hijos */}
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default RootMovieLAyout
