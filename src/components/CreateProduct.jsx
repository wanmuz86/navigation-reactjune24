import React from 'react'
import { Form, redirect } from 'react-router-dom'

// The Form Method that is defined for POST /create-product
export const createProductAction = async ({request}) => {
  // The data can be retrieved from formData property of request

  const data = await request.formData()
  const submission = {
    title: data.get('title'),
    price:data.get('price'),
    description:data.get('description')
  }

  console.log(submission)
  // TODO call the POST API for ex

  return redirect('/')
}

const CreateProduct = () => {
  return (
    <div>
      <h3>Create Product</h3>
      <Form method='post' action='/admin/create-product'>
        <div className="mb-3">
          <label htmlFor="name">Product name</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Product Price</label>
          <input type="text" name="price" id="price" required />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Description</label>
          <textarea type="text" name="description" id="description" required />
        </div>
        <button type='submit'>Add Item</button>
      </Form>
    </div>
  )
}

export default CreateProduct