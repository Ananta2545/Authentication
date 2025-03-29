import React from 'react';
import Welcome from './components/Welcome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = createBrowserRouter([
    {path:"/", element: <Welcome/>}
])

export default Router;