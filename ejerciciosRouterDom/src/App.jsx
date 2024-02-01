// App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import RootLayout from './pages/RootLayout';

function App () {
  const router = createBrowserRouter([
    {path:'/', 
      element: <RootLayout />,
      children: [
        {index:true, element: <Home />}, // es igual que poner {path:"", element: <HomePage />} pero con index es más elegante
        // {path:'peliculas', element: <Products />},
        { path: '/about', element: <About /> },
        { path: '/post/:id', element: <Post /> },
     ],
    },
  ]);
  return <RouterProvider router={router} />
}

export default App;
