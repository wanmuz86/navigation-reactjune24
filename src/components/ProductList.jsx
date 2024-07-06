import React from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom'



// Call to API which will be done when the page is loaded
export const dataLoader = async () => {
    const apiUrl = "https://fakestoreapi.com/products"
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