import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className="absolute top-0 p-10 left-0 h-full w-full flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">
          1
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            nam quas eius non. Eos, sequi.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent