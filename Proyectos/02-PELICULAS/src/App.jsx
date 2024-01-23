import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./router-dom-ejemplos/HomePage";
import Products from "./router-dom-ejemplos/Products";
import RootLayout from "./router-dom-ejemplos/RootLayout";
import ErrorPage from "./router-dom-ejemplos/ErrorPage";
import ProductDetails from "./router-dom-ejemplos/ProductDetails";

function App () {
    const router = createBrowserRouter([
      {path:'/', element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          {path:'/', element: <HomePage />},
          {path:'/productos', element: <Products />},
          {path:'/productos/:productId', element: <ProductDetails />},
       ],
      },
    ]);
    return <RouterProvider router={router} />
}

export default App
