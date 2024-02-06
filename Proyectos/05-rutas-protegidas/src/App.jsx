import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoute from './utils/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            element: <ProtectedRoute  isActive={false} redirectPath='login'/>,
            children: [
              {index:true, element: <Home />},
              {path: "about", element: <About />}
            ]
          },
          {
            path: 'login',element: <Login />
          }
        ]
      },
    ]);
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
}

export default App;