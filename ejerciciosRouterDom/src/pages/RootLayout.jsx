import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Aquí van los hijos */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
