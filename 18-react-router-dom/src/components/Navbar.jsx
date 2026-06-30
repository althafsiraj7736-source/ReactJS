import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='text-white flex items-center justify-between bg-[#13526b] px-3 py-4'>
        <h2 className='text-2xl font-extrabold '>Xenora</h2>
        <div className='flex gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
      </div>
  )
}

export default Navbar