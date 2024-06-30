import React, { useEffect } from 'react'
import { useParams,useSearchParams } from 'react-router-dom';

const Product = () => {
    let {productId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    // When the page is loaded I want to retrieve the searchParams using .get method
    // useEffect hook => To perform initialization when the component is loaded

    // [] -> change on the component
    // [counter] -> this code will run everytime there is a change on state counter
   

    useEffect(()=>{
        console.log(searchParams.get('q'))
        console.log(searchParams.get('lang'))

        // to simulate an error page from product
        if (productId > 10000){
            throw Error('It is impossible for the product to be that big')
        }
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