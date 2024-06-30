import React from 'react'
import { useRouteError } from 'react-router-dom'

const ProductError = () => {

    const error = useRouteError();  // retrieving the error information from errorElement

  return (
    <div>
        <h1>Product error happens!</h1>
        <p>Error happens in product page template</p>
        <p>
            {error.statusText || error.message}
        </p>
    </div>
  )
}

export default ProductError