// import React from "react"
// // code for Form handling
// const App = () => {

//   const submithandler = (e) => {
//     e.preventDefault()
//     console.log("Form Submitted")
//   }
//   return (
//     <div>
//       <form action="" onSubmit={(e)=>{submithandler(e)}}>
//         <input type="text" placeholder="Enter your name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;




// Code for two way data binding
import React, { useState } from "react"

const App = () => {
  const [title, settitle] = useState('')

  const submithandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by",title)
    settitle('')
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{submithandler(e)}}>
        <input type="text" placeholder="Enter your name" value={title} onChange={(e)=> {settitle(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
