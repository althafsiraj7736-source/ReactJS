// import React from 'react'

import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jump5Sum() {
    setNum(num+5)
  }

  return (
    <div className='container'>
      <h1 className='counter'>{num}</h1>
      <button onClick={increaseNum} className='btn btn-increase'>increase</button>
      <button onClick={decreaseNum} className='btn btn-decrease'>decrease</button>
      <button onClick={jump5Sum} className='btn btn-decrease'>Jump by 5</button>
    </div>
  )
}

export default App
