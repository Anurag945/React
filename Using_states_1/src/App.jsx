import React from "react";
import { useState } from "react";

function App(){
  const [score,setvalue] = useState(true)
  return(
    <div className=" w-full h-screen  justify-center ">     
    <h1 className="px-6 py-8">{score.toString()}</h1>  
    <button onClick={()=>setvalue(!score)} className="px-4 py-2 bg-blue-400 rounded ">change</button>
     </div>
  )
}

export default App