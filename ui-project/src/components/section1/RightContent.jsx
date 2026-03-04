import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/4 rounded-4xl flex overflow-x-auto flex-nowrap gap-10'>
        {props.users.map(function(elem, idx){
          return <RightCard key={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent