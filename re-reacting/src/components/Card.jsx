import React from "react"

function Card() {
    return (
      <div className="w-full h-screen bg-zinc-200">
       <div className=" w-52  bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%]  -translate-y-[50%] rounded-md overflow-hidden">
        <div className="W-full h-32 bg-zinc-300 ">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYXpvbiUyMGFuaXJ1ZGh8ZW58MHx8MHx8fDA%3D"></img>
        </div>
        <div>
        <div className=" w-full px-3 py-4">
        <h2 className="font-semibold">Amazon Basics</h2>
        <p className="text-xs mt-1">Lorem Ipsum Generator lets you create Lorem Ipsum text with customizable options. You can</p>
        </div>
       </div>
       </div>

      </div>


    )
}

export default Card




