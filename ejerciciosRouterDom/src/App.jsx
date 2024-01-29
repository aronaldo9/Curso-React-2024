// import React from 'react'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/post/:id', element: <Post /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
