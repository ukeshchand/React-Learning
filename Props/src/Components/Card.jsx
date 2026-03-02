import React from 'react'

const Card = (props) => {
    console.log(props.user)
  return (
   <div className='parent'>
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1770682709359-4c770608765b?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='img'/>
      <h1>{props.user}, {props.age
        }</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button className='cardButton'>view</button>
    </div>
   </div>
  )
}

export default Card