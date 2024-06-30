import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();

    const error = useRouteError();  // retrieving the error information from errorElement

  return (
    <div>
        <h1>Oops something is wrong</h1>
        <p>Sorry for an Error Occured</p>
        <p>
            {error.statusText || error.message}
        </p>
        <button onClick={()=> navigate('./') }>Go Home!</button>
    </div>
  )
}

export default Error