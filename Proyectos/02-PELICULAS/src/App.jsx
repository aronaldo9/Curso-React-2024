import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootMovieLAyout from "./pages/RootMovieLAyout";
import ErrorMoviePage from "./pages/ErrorMoviePage";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AcercaDe from "./pages/AcercaDe";
import Usuario from "./pages/Usuario";

function App () {
    const router = createBrowserRouter([
      {path:'/', element: <RootMovieLAyout />,
        errorElement: <ErrorMoviePage />,
        children: [
          {index:true, element: <Home />}, // es igual que poner {path:"", element: <HomePage />} pero con index es más elegante
          // {path:'peliculas', element: <Products />},
          {path:'peliculas/:movieId', element: <MovieDetailsPage />},
          {path:"/usuario", element: <Usuario />},
       ],
      },
      {
        path:"/acerca_de", element: <AcercaDe />,
        
      }
    ]);
    return <RouterProvider router={router} />
}

export default App
