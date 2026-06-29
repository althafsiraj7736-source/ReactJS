// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)


  function ChangeA(){
    console.log('A is Changed');
    
  }
  function ChangeB(){
    console.log('B is Changed');
    
  }
  useEffect(function(){
    ChangeA()
    console.log('Running')
  },[a])
  useEffect(function(){
    ChangeB()
    console.log('Running')
  },[b])
  return (
    <div className='bg-black h-screen text-white'>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }} className="btn-glass">ChangeA</button>
      <button onClick={()=>{
        setB(b-1)
      }} className="btn-glass">ChangeB</button>
    </div>
  )
}

export default App