import React from 'react'

import { useRouteError } from 'react-router'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops...</h1>
      <h3>Something went worng</h3>
      <h3>{error.status}</h3>
      <h3>{error.statusText}</h3>
    </div>
  )
}

export default Error
