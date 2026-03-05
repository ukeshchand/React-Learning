import React from 'react'
import { useState } from 'react'


const App = () => {
  const [num, setnum] = useState(0)

  const increaseNum = () => {
    setnum(num+1)
  }

  const DecreaseNum = () => {
    setnum(num-1)
  }

  return (
    <div>
      <h2>The value is {num}</h2>
      <button style={{margin: '10px'}} onClick={increaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      
    </div>
  )
}

export default App