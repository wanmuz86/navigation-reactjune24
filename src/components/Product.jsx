import React, { useEffect } from 'react'
import { useParams,useSearchParams } from 'react-router-dom';

const Product = () => {
    let {productId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    // When the page is loaded I want to retrieve the searchParams using .get method
    // useEffect hook => To perform initialization when the component is loaded

    useEffect(()=>{
        console.log(searchParams.get('q'))
        console.log(searchParams.get('lang'))

    },
    []);
  return (
    <div>
        <h1>Product Page</h1>
        <p>This is for product {productId} </p>
    </div>
  )
}

export default Product