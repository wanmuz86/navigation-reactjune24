import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();  // retrieving the error information from errorElement

  return (
    <div>
        <h1>Oops something is wrong</h1>
        <p>Sorry for an Error Occured</p>
        <p>
            {error.statusText || error.message}
        </p>
    </div>
  )
}

export default Error