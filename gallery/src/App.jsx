import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=3${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserdata = <h3 className="text-gray-50">No User Available</h3>;
  if (userData.length > 0) {
    printUserdata = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg pt-3">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen p-4 overflow-auto text-white">
      {/* <button
        onClick={getData}
        className="bg-green-600 active:scale-95 m-4 px-5 py-2 rounded"
      >
        Get Data
      </button> */}
      <div className="flex flex-wrap gap-4 pb-2">{printUserdata}</div>
      <div className="flex justify-center items-center p-4">
        <button className="bg-amber-400 text-black rounded cursor-pointer active:scale-95 text-sm px-4 py-2 font-semibold gap-60" onClick={()=>{
          if (index>1){
          setIndex(index-1)
          }
        }}>
          Prev
        </button>
        <button className="bg-amber-400 text-black rounded cursor-pointer active:scale-95 text-sm px-4 py-2 font-semibold gap-6" onClick={()=>{
          setIndex(index+1)
        }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
