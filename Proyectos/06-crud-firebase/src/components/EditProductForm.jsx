import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../firebase/productosApi";
import Swal from "sweetalert2";



const EditProductForm = ({initialData}) => {
  const [formData, setFormData] = useState(initialData)
  const navigate = useNavigate();

  const handleChange = (e) => { 
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleClick = () => {
    navigate(-1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct( initialData.id, formData);
      Swal.fire({
        icon: "success",
        title: "¡Actualización Correcta!",
        text: "Datos del producto actualizados correctamente"
      })
    } catch (error) {
      console.log("Error al editar el producto, error");
    }
      finally {
        navigate("/");
      }
  }

  return (
    <div className="w-1/2 mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-3xl font-semibold mb-4"> Añadir nuevo Producto</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="text"
            name="nombre"
            placeholder="Nombre del Producto"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="number"
            name="stock"
            placeholder="Stock del Producto"
            value={formData.stock}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="descripcion"
          >
            Descripción del Producto
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            Imagen del Producto
          </label>
          <div className="mb-4">
            <span className="text-gray-700 block mb-2">Vista previa de la imagen</span>
            <img src={formData.url} alt="" className="w-full h-auto rounded" />
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="text"
            name="url"
            placeholder="Url del Producto"
            value={formData.url}
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
            Añadir producto
          </button>
          <button 
            className="bg-gray-400 hover:bg-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-blue-500" 
            onClick={handleClick}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
