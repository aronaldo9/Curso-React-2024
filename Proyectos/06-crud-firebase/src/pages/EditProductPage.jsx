import { useNavigate, useParams } from "react-router-dom"
import EditProductForm from "../components/EditProductForm"
import { useEffect, useState } from "react";
import { getProductById } from "../firebase/productosApi";
import Spinner from "../components/Spinner";


const EditProductPage = () => {
    const { idproduct } = useParams();
    const [producto, setProducto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const productData = await getProductById(idproduct);
          if(productData) {
            setProducto(productData);
          } else {
            navigate("/")
          }
        } catch (error) {
          console.log("Error fetching data", error);
        }
      }

      if(idproduct) {
        fetchProduct();
      }
      
    }, [])
    
    if(producto === null) {
      return <Spinner />;
    }

    return (
      <div className="w-5/6 mx-auto mt-10">
        <EditProductForm initialData={producto}/>
      </div>
    )
}

export default EditProductPage