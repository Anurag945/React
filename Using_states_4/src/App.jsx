 import React, { useState } from "react";

 function App(){

  const [val,setVal]=useState([1,2,3,4,5,6])
 return( 
 <div>
{val.map(item=><h1>{item}</h1>)}
  </div>
 )
}
 
 export default App