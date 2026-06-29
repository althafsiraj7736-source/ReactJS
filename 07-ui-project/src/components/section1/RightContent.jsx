// import React from 'react'

import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 px-6 flex flex-nowrap gap-11 overflow-x-auto rounded-4xl">
        {props.users.map(function(elem, idx){
            return <RightCard img={elem.img} tag={elem.tag} key={idx} id={idx} color={elem.color}/>
        })}

    </div>
  )
}

export default RightContent