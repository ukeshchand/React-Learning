import React, { useEffect, useState } from 'react'

const App = () => {
  
const [a, seta] = useState(0)
const [b, setb] = useState(0)

  useEffect (function(){
    console.log("a is running")
  },[a,b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>Value a</button> 
      <button onClick={()=>{
        setb(b+1)
      }}>Value b</button>
    </div>
  )
}

export default App