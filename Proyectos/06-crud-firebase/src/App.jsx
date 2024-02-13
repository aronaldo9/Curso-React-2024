import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
// import { ProductosProvider } from "./context/Otra_forma_contexto/ProductosProvider";
// import { AuthProvider } from "./context/useAuthProducts";
import EditProductPage from "./pages/EditProductPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import RootPage from "./pages/RootPage";
import { AuthProvider } from "./context/authContextProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute redirectPath="/login" />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            { path: "/productos/:idproduct", element: <EditProductPage /> },
            { path: "/payment", element: <PaymentPage /> },
          ],
        },
        { path: "/login", element: <LoginPage /> },
      ],
    },
  ]);
  return (
    // ----------- Usando el contexto de la primera forma ---------------
    // <AuthProvider>
    //   <RouterProvider router={router} />
    //   );
    // </AuthProvider>

    // ------------- Usando el provider del contexto de Otra_forma_contexto ---------------
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;