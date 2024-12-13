import React from "react";


function Card(){

    var Data= [
        {songname:"Maahiya ve",description:"Mahiyae's composer, lyrics, arrangement, streaming platforms, and so on"},
        {songname:"junoon",description:"Mahiyae's composer, lyrics, arrangement, streaming platforms, and so on"},
        {songname:"Maahiya ve",description:"Mahiyae's composer, lyrics, arrangement, streaming platforms, and so on"}
        ]
   
    return(

        <div className="w-full h-screen bg-zinc-300 flex items-center gap-10 justify-center">
             {Data.map((value,index)=><div className=" w-80 px-3 py-4 bg-zinc-100 rounded">
             <h3 className="font-semibold">{value.songname}</h3>
             <p className="text-xs mt-2" text-sm>{value.description}</p>
             <button onClick={()=> alert("chal rha hai")} className="bg-blue-500 px-2 py-1 rounded text-sm mt-2 text-zinc-900">Download</button>
            </div>
              
           )}
 
           
        </div>
     )
}

export default Card