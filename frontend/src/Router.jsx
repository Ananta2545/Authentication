import React from 'react';
import Welcome from './components/Welcome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUpForm';
import Profile from './components/Profile';

const Router = createBrowserRouter([
    {path:"/", element: <Welcome/>},
    {path:'/login', element:<LoginForm/>},
    {path:'/signup', element:<SignupForm/>},
    {path: '/profile', element: <Profile/>}
])

export default Router;