import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Navbar from './components/section1/Navbar'
import Page1Content from './components/section1/Page1Content'


const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1632820941593-905238e6db43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwcm98ZW58MHx8MHx8fDA%3D', 
      intro: '', 
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1632820941346-64e2e57c5cec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm98ZW58MHx8MHx8fDA%3D', 
      intro: '', 
      tag: 'underserved'
    },
    {
      img: 'https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JepBOGOGiPwRF2z0pwiADeUZhsk6eFt4eKliWjzDGHo=', 
      intro: '', 
      tag: 'underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App