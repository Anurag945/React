import React from 'react';


function Card({image,Name,profession}){
    return(
        <div className='w-55 min-h-[200] bg-zinc-300 p-1.5 py-1.5 '>
        <div className='w-full h-52 bg-amber-200 overflow-hidden  '>
        <img src={image} className='w-full h-full object-cover'></img>
        </div>
        <h1 className='font-semibold text-md'>{Name}</h1>
        <h2 className='text-xs '>{profession}</h2>
        <button className='bg-blue-500 text-xs px-3 py-2 rounded-md text-zinc-200 mt-1 ml-1'>Add Friend</button>
            
        </div>
    )
}

export default Card;