import React from 'react';
import { useState } from 'react';

function App()
{
  const [val,setVal]=useState({Name:'Anurag',isBanned:true})



  return (
    <>
    <h1>Name:{val.Name}</h1>
    <h2>status:{val.isBanned.toString()}</h2>
    <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className={`px-4 py-2 ${val.isBanned?
    "bg-blue-600":"bg-red-400"} text-zinc-100 `}>change</button>
  

    </>
  )


}

export default App