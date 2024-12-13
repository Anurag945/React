import React from "react"
import { useState } from "react"

function App(){
  const [val,setval]=useState({name:"Anurag" ,isBanned:true});
  return(
    <>
      <h1>hello</h1>
      <h2>{val.name}</h2>
      <h2>{val.isBanned.toString()}</h2>

      <button onClick={()=>setval({...val,isBanned:!val.isBanned})} className={`px-2 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-md`}>change</button>
    </>
  )
}

export default App