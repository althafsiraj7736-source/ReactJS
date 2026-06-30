// import React from 'react'

import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const params = useParams()
    
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">{params.id}Course Details</h1>
    </div>
  )
}

export default CourseDetails