import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootMovieLayout from "./pages/RootMovieLayout";
import ErrorMoviePage from "./pages/ErrorMoviePage";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AcercaDe from "./pages/AcercaDe";

function App () {
    const router = createBrowserRouter([
      {path:'/', 
        element: <RootMovieLayout />,
        errorElement: <ErrorMoviePage />,
        children: [
          {index:true, element: <Home />}, // es igual que poner {path:"", element: <HomePage />} pero con index es más elegante
          // {path:'peliculas', element: <Products />},
          {path:'peliculas/:movieId', element: <MovieDetailsPage />},
       ],
      },
      {
        path:"/acerca_de", element: <AcercaDe />,
        
      }
    ]);
    return <RouterProvider router={router} />
}

export default App
