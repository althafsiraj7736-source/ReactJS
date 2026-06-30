// import React from 'react'

const NotFound = () => {
  return (
    <div> 
        <h2 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-8xl font-bold text-red-500">404</h2>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-semibold">Page not found</h2>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-8 text-gray-600">The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound