// import React from 'react'
import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
      const navigate = useNavigate()

  return (
    <div className="py-1 px-1 bg-cyan-700">
        <button 
      onClick={()=>{
        navigate('/')
      }} 
      className="bg-amber-500 px-5 py-2 rounded-xl m-2 cursor-pointer active:scale-95">Return to Home
      </button>
      <button 
      onClick={()=> {
        navigate(-1)
      }} 
      className="bg-amber-500 px-5 py-2 rounded-xl m-2 cursor-pointer active:scale-95">Back
      </button>
      <button 
      onClick={()=> {
        navigate(+1)
      }} 
      className="bg-amber-500 px-5 py-2 rounded-xl m-2 cursor-pointer active:scale-95">Next
      </button>
    </div>
  )
}

export default Navbar2