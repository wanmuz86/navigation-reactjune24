import React from 'react'



// Call to API which will be done when the page is loaded
export const dataLoader = async () => {
    const apiUrl = "https://fakestoreapi.com/products"
    const res = await fetch(apiUrl)
    const jsonResult = await res.json()
    return jsonResult
}

const ProductList = () => {
  return (
    <div>ProductList</div>
  )
}

export default ProductList