import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <App></App>
},
{
  path:"/homepage",
  element: <Homepage></Homepage>
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
