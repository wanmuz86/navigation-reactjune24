import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Product, {detailLoader} from './components/Product.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error.jsx'
import ProductError from './components/ProductError.jsx'

import ProtectedRoute from './components/ProtectedRoute.jsx'
import CreateProduct from './components/CreateProduct.jsx'
import ProductList,{dataLoader} from './components/ProductList.jsx'

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
        path:"products",
        element:<ProductList/>,
        loader:dataLoader
      },
      {
        path:"products/:productId",
        element:<Product/>,
        loader:detailLoader,
        errorElement:<ProductError/> // Setting up Error Boundary for Product page
      },
      {
        // Everything that starts with admin/ -> To be protected
        // Rules to protect the page will be defined in ProtectedRoute
        element:<ProtectedRoute/>,
        path:"admin",
        children:[
         {
          // admin/create-product is an add a product page which will be protected
          path:"create-product",
          element:<CreateProduct/>
         }
        ]


      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
