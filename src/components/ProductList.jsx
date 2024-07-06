import React from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom'



// Call to API which will be done when the page is loaded

// 1) Retrieveing the searchparams -> add request as props in dataLoader
export const dataLoader = async ({request}) => {

    // 2) Retrieveing the searchparams - retrieved the url
    const url = new URL(request.url) // THE URL OPENED BY USER IN THIS PAGE 
    // localhost:5173/products?limit=4

    let limitParam = 10; // default search results for API if no params sent
    // 3) Retrieveing the searchparams - from the url get the parameters
    if (url.searchParams.get("limit")){
        limitParam = url.searchParams.get("limit")
    }

    const apiUrl = `https://fakestoreapi.com/products?limit=${limitParam}`
    const res = await fetch(apiUrl)
    const jsonResult = await res.json()
    return jsonResult
}

const ProductList = () => {

    const results = useLoaderData()
    // Try to get the state of the navigation / loading
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h2>Product page</h2>
            {
                results.map((val) => (
                    <div key={val.id}>
                        {/* // From /products go to /products/1 */}
                        <Link to={`./${val.id}`}>
                            <h1>{val.title}</h1>
                            <p>{val.price}</p>
                        </Link>
                    </div>
                )
                )
            }
        </div>
    )
}

export default ProductList