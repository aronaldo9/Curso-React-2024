
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <hr />
      <Outlet /> {/*aquí es donde se van a pintar los hijos */}
      <hr />
      <div>footer</div>
    </>
    
  )
}

export default RootLayout;
