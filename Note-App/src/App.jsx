import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task]
    copyTask.push({title,details})
setTask(copyTask)
console.log(copyTask)

    setTitle('')
    setDetails('')
  };

  const deleteNote = (idx) => {
    const copytask = [...task]
    copytask.splice(idx,1)
    setTask(copytask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" p-10 gap-4 lg:w-1/2 flex items-start flex-col"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* <div className="flex   w-1/2 items-start "> */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 font-medium outline-none rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <textarea
          type="text"
          className="px-5 h-32 w-full py-2 font-medium outline-none border-2 rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white w-full font-medium outline-none text-black px-5 py-2 rounded active:bg-gray-300">
          Add Notes
        </button>
        {/* </div> */}
      </form>
      <div className="lg:border-l-2 lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem, idx){
            return <div key={idx} className="h-52 flex justify-between items-start flex-col relative pt-9 pb-4 py-10 px-4 text-black w-40 rounded-2xl bg-cover bg-[url('https://imgs.search.brave.com/b9nc5BMwJ963hopkarex8iyCPZDL5oVweOdhvT2icjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')]">
             
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-500">{elem.details}</p>
              <button onClick={()=>{
                deleteNote(idx)
              }}className="w-full bg-red-600 py-1 cursor-pointer scale-95 text-xs rounded font-bold text-white">Delete</button>
            </div>
            
          })}
          {/* <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
