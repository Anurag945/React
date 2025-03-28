import React from "react";
import { useState } from "react";

function App(){

  const [val,setval]= useState([1,2,3,4,5,6,7])

  

  return(
    <div className="px-20 py-20">
    {val.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setval(val.filter(item=>item%2 !== 0))} className="px-4 py-1 bg-blue-700 text-zinc-200">Click</button>


    </div>
  )
}

export default App