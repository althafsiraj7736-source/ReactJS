// import React from 'react'
import {RiArrowRightLine} from '@remixicon/react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className='bg-white rounded-full h-12 w-12 justify-center items-center flex font-semibold text-xl'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-18'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis placeat dolore.</p>
                <div className='flex justify-between items-center'>
                    <button style={{backgroundColor:props.color}} className='text-white font-semibold px-8 py-3 rounded-full'>{props.tag}</button>
                    <button className='  text-black font-semibold px-4 py-3 rounded-full'><RiArrowRightLine /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent