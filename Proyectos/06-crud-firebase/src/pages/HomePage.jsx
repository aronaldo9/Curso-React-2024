import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ShowProductTable from "../components/ShowProductTable";
import Header from "../components/Header";

const HomePage = () => {
  const [, SetForceUpdate] = useState()
  const actualizarProductos = () => {
    SetForceUpdate({});
  }
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-8">
        Crud de Productos con Firebase
      </h1>
      <AddProductForm actualizarProductos={actualizarProductos} />
      <ShowProductTable
        actualizarProductos={actualizarProductos}
      />
    </div>
    </>
    
  );
};

export default HomePage;