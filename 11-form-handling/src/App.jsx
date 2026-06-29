// import React from 'react'

import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title);
    setTitle('');
    
  }
  return (
    <div>
      <form onSubmit={(e)  => {
        submitHandler(e)
      }}>
        <input 
        className="p-4 border rounded mr-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" 
        type="text" 
        placeholder="Enter your Name" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button className="p-4 bg-blue-500 text-white rounded mt-4">Submit</button>
      </form>
    </div>
  )
}

export default App