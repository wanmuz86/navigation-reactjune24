import React, { useEffect } from 'react'
import { useLoaderData, useNavigation, useParams, useSearchParams } from 'react-router-dom';


const apiUrl = "https://fakestoreapi.com/products/"

// IF I'm retrieveing params from the URL, The parameter will be passed as props in the function loader
// params.productId since our parameter is called productId
export const detailLoader = async ({ params }) => {

  const res = await fetch(`${apiUrl}/${params.productId}`)
  const resJson = await res.json();
  return resJson;
}

const Product = () => {
  let { productId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation()
  const result = useLoaderData();

  // When the page is loaded I want to retrieve the searchParams using .get method
  // useEffect hook => To perform initialization when the component is loaded

  // [] -> change on the component
  // [counter] -> this code will run everytime there is a change on state counter


  useEffect(() => {
    console.log(searchParams.get('q'))
    console.log(searchParams.get('lang'))

    // to simulate an error page from product
    if (productId > 10000) {
      throw Error('It is impossible for the product to be that big')
    }
  },
    []);

  return (
    <div>
      {
        navigation.state === "loading" ? <h1>Loading!!</h1> :

          <div>
            <h1>Product Page</h1>
            <p>{result.title} </p>
            <p>{result.price}</p>
            <img src="{result.image}" alt="" />
            <p>{result.category}</p>
            <p>{result.description}</p>
          </div>
      }
    </div>
  )
}

export default Product