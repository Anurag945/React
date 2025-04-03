import React from 'react'

const Card = () => {
  return (
    <div className=' w-60 p-10 rounded-md flex gap-5  bg-blue-200 mt-10 relative'>
    <div className='h-20 w-20 bg-orange-500 rounded-md'></div>
    <div className=''>
        <h1 className='font-semibold '>SongName</h1>
        <h2 className='text-sm'>Artist name</h2>
    </div>
    <button className='bg-orange-500 px-4 py-3 bottom-0 whitespace-nowrap -translate-x-[50%] translate-y-[50%]  absolute left-1/2 rounded-full'>ADD to Fav</button>
    </div>
  )
}

export default Card