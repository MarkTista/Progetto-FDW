import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Singup from './pages/Singup.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
{
  path: "/",
  element: <Homepage></Homepage>
},
{
  path:"/Singup",
  element: <Singup></Singup>
},
{
  path:"/Login",
  element: <Login></Login>
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
