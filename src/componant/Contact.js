import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Contact Us</h1>
      <h3>{count}</h3>
      <button onClick={() => {
        setCount(count + 1);
      }}>Inrement</button>
    </div>
  )
}

export default Contact
