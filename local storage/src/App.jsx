import React from 'react'

const App = () => {

  const user = {
    name: 'Ukesh',
    Age: 23,
    Address: "kathmandu"
  }

  localStorage.setItem("user", JSON.stringify(user))
// const user = JSON.parse(localStorage.getItem('user'))
  
  console.log(user)
  return (
    <div>Local Storage</div>
  )
}

export default App