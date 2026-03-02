import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card user="Shyam" age={18}/>
      <Card user= "Ukesh"  age={22}/>
    </div>
  )
}

export default App