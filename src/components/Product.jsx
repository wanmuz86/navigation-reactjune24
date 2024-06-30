import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    let {productId} = useParams();
  return (
    <div>
        <h1>Product Page</h1>
        <p>This is for product {productId} </p>
    </div>
  )
}

export default Product