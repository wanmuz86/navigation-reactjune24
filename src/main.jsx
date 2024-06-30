import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error.jsx'
import ProductError from './components/ProductError.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>, // Setting up Error Boundary 
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"products/:productId",
        element:<Product/>,
        errorElement:<ProductError/> // Setting up Error Boundary 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
