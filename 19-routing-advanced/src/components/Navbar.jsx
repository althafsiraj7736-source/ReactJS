// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex px-8 py-5 bg-cyan-800 justify-between">
        <h2 className="font-bold text-3xl">XENORA</h2>
        <div className="flex gap-8 font-medium text-lg">
          <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link to="/courses" className="hover:text-gray-400 transition-colors">Courses</Link>
          <Link to="/product" className="hover:text-gray-400 transition-colors">Product</Link>
        </div>
    </div>
  )
}

export default Navbar