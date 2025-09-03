import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Singup from './pages/Singup.jsx'
import Homepaged from './pages/Homepaged.jsx'
import CourseLesson from './pages/CourseLesson.jsx'
import Homepages from './pages/Homepages.jsx'
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
},
{
  path:"/Homepaged",
  element: <Homepaged></Homepaged>
},
{
  path: "/Homepaged/corso/:corsoId/lezione",
  element: <CourseLesson />
},
{
  path: "/Homepages",
  element: <Homepages />
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
