import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
function App(){


  const [val,setVal] = useState(false);


return(
  <div className="h-screen w-full bg-zinc-400 flex justify-center items-center">
  <div  className='h-80 w-120 bg-amber-300 flex relative '>
    <img className={` rounded-md shrink-0 object-cover ${val?"-translate-x-[100%]":"-translate-x-[0%]"} w-full h-full`} src="https://images.unsplash.com/photo-1742827871492-72428a28106b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"></img>
    <img className={`rounded-md shrink-0 object-cover ${val?"-translate-x-[100%]":"-translate-x-[0%]"} w-full h-full`} src="https://images.unsplash.com/photo-1742885203450-e2bdf135f0da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"></img>
    <span onClick={()=>setVal(()=>!val)} className=' w-13 h-13 absolute left-1/2 flex justify-center bottom-[7%] items-center rounded-full bg-[#dadada7b] -translate-x-[50%] '>
    <FaArrowRight size={"18px"} />
    </span>



    
  </div>

    
  </div>

)
}


export default App;