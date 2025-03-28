import React from 'react';

function Card({text,colour}){

    return(
        <div className='px-8'>
         <button className={`px-4 py-2 ${colour} text-zinc-100 rounded-md mr-8`}>{text}</button>
        </div>
    )
}

export default Card;