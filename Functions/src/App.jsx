import React from 'react'

const App = () => {
  // const BtnClicked = () => {
  //   console.log("Button Clicked")
  // }

  // const userInput =(ukesh)=> {
  //   console.log(ukesh.target.value)
  // }
  const pageScrolling = (elem) => {
    if (elem > 0){
      console.log("Forward Scrolling")
    }
    else{
      console.log("Backward Scrolling")
    }
  }

  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      
      <div className="page1" style={{padding: '100px', backgroundColor: "Red"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quasi? Eos, qui voluptate beatae laborum facilis similique rerum mollitia veritatis hic eligendi explicabo possimus, quas corporis architecto officiis cumque, deleniti optio itaque maxime! Eligendi iure nam provident dolorum, magni, aliquam rem deserunt in beatae recusandae inventore fugiat illum omnis, error quibusdam? Ut ullam fuga eaque odio id repudiandae enim quia hic dolorum, sed nisi harum. Accusantium vitae at magnam labore nam natus minus voluptatum id, reprehenderit praesentium, perspiciatis cupiditate quaerat. Consequatur in, vel quibusdam nulla officiis, impedit temporibus quas sapiente facilis corporis expedita labore fuga? Voluptatibus, explicabo rerum. Minima, odio?</div>
      <div className="page2" style={{padding: '100px', backgroundColor: "Yellow"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quasi? Eos, qui voluptate beatae laborum facilis similique rerum mollitia veritatis hic eligendi explicabo possimus, quas corporis architecto officiis cumque, deleniti optio itaque maxime! Eligendi iure nam provident dolorum, magni, aliquam rem deserunt in beatae recusandae inventore fugiat illum omnis, error quibusdam? Ut ullam fuga eaque odio id repudiandae enim quia hic dolorum, sed nisi harum. Accusantium vitae at magnam labore nam natus minus voluptatum id, reprehenderit praesentium, perspiciatis cupiditate quaerat. Consequatur in, vel quibusdam nulla officiis, impedit temporibus quas sapiente facilis corporis expedita labore fuga? Voluptatibus, explicabo rerum. Minima, odio?</div>
      <div className="page3" style={{padding: '100px', backgroundColor: "Green"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quasi? Eos, qui voluptate beatae laborum facilis similique rerum mollitia veritatis hic eligendi explicabo possimus, quas corporis architecto officiis cumque, deleniti optio itaque maxime! Eligendi iure nam provident dolorum, magni, aliquam rem deserunt in beatae recusandae inventore fugiat illum omnis, error quibusdam? Ut ullam fuga eaque odio id repudiandae enim quia hic dolorum, sed nisi harum. Accusantium vitae at magnam labore nam natus minus voluptatum id, reprehenderit praesentium, perspiciatis cupiditate quaerat. Consequatur in, vel quibusdam nulla officiis, impedit temporibus quas sapiente facilis corporis expedita labore fuga? Voluptatibus, explicabo rerum. Minima, odio?</div>
    </div>
  )
}

export default App